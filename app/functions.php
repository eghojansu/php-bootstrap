<?php

use Ekok\App\Fw;

function fw(Fw $fwSet = null): Fw
{
    static $fw;

    if ($fwSet) {
        $fw = $fwSet;
    }

    return $fw;
}

function file_mime(string $file, string $default = null, bool $ext = false): string {
    static $mimes = array(
        'css' => 'text/css',
        'gif' => 'image/gif',
        'jpe' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'jpg' => 'image/jpeg',
        'js' => 'application/x-javascript',
        'png' => 'image/png',
        'svg' => 'text/xml-svg',
        'txt' => 'text/plain',
        'woff' => 'font/woff',
        'woff2' => 'font/woff2',
    );

    return $mimes[$ext ? $file : strtolower(ltrim(strrchr($file, '.'), '.'))] ?? $default ?? 'application/octet-stream';
}

function dump(...$values): void {
    ob_end_clean();
    print('<pre>');
    var_dump(...$values);
    print('</pre>');
    die;
}
