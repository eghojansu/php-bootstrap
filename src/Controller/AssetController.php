<?php

namespace App\Controller;

use Ekok\App\Fw;
use Ekok\Utils\Str;
use Ekok\Container\Box;

class AssetController extends BaseController
{
    public function home(Fw $fw, Box $box, string $path)
    {
        $dir = $box['resource_dir'] . '/';
        $len = strlen($dir);
        $test = Str::fixslashes(realpath($dir . $path));
        $valid = $test && 0 === strncasecmp($dir, $test, $len) && is_file($test) && $len < strlen($test);

        if (!$valid) {
            return $fw->error(404);
        }

        $lastModifiedTime = filemtime($test);
        $size = filesize($test);
        $max = $size - 1;
        $bytes = array(0, $max);

        $fw->setHeader('Last-Modified', gmdate("D, d M Y H:i:s", $lastModifiedTime) . " GMT");

        if (($since = $fw->env('SERVER.HTTP_IF_MODIFIED_SINCE')) && strtotime($since) === $lastModifiedTime) {
            return $fw->send(null, null, 304);
        }

        if ($range = $fw->env('SERVER.HTTP_RANGE')) {
            if (0 !== strncmp($range, 'bytes=', 6)) {
                return $fw->send(null, array(
                    'Content-Range' => 'bytes */' . $size, // Required in 416.
                ), 416);
            }

            $check = array_filter(explode('-', strstr(substr($range, 6) . ',', ',', true)));

            sort($check);

            $bytes = $check + $bytes;

            if ($bytes[0] >= $bytes[1] || $bytes[0] < 0 || $bytes[1] > $max) {
                return $fw->send(null, array(
                    'Content-Range' => 'bytes */' . $size, // Required in 416.
                ), 416);
            }

            $fw->status(206);
            $fw->setHeader('Content-Range', 'bytes */' . sprintf('%u-%u/%u', $bytes[0], $bytes[1], $size));
        }

        return static function() use ($fw, $test, $bytes) {
            $fp = fopen($test, 'rb');

            $contentLength = $bytes[1] - $bytes[0] + 1;

            $fw->setMime(file_mime($test));
            $fw->setHeaders(array(
                'Accept-Ranges' => 'bytes',
                'Content-Length' => sprintf('%u', $contentLength),
                'Cache-Control' => 'public, max-age=604800',
                'Expires' => gmdate("D, d M Y H:i:s", time() + 604800) . " GMT",
            ));
            $fw->send(null);

            if ($bytes[0] > 0) {
                fseek($fp, $bytes[0]);
            }

            $sentSize = 0;

            while (!feof($fp) && (connection_status() === CONNECTION_NORMAL)) {
                $readingSize = $contentLength - $sentSize;
                $readingSize = min($readingSize, 512 * 1024);

                if ($readingSize <= 0) {
                    break;
                }

                $data = fread($fp, $readingSize);

                if (!$data) {
                    break;
                }

                $sentSize += strlen($data);

                echo $data;
                flush();
            }

            fclose($fp);
        };
    }
}
