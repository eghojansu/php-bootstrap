<?php

use Ekok\App\Event\ErrorEvent;
use Ekok\App\Fw;
use Ekok\Utils\Arr;
use Ekok\Utils\Str;
use Ekok\Logger\Log;
use Ekok\Container\Di;
use Ekok\Container\Box;
use Ekok\EventDispatcher\Dispatcher;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/functions.php';
require __DIR__ . '/templates.php';

return Fw::create()->chain(static function (Fw $fw, Di $di, Box $box, Log $log, Dispatcher $dispatcher) {
    // setup environtment
    $env = isset($_ENV['APP_ENV']) ? strtolower($_ENV['APP_ENV']) : null;
    $projectDir = Str::fixslashes(dirname(__DIR__));

    $box->load(
        $projectDir . '/env.dist.php',
        $projectDir . '/env.php',
        $projectDir . '/env.' . $env .'.php',
    );
    $box->loadInto('choice.', __DIR__ . '/constants.php');
    $box->occupy(array(
        'env' => $env ?? 'prod',
        'tmp_dir' => $projectDir . '/var',
        'resource_dir' => $projectDir . '/resources',
        'project_dir' => $projectDir,
    ));

    // create temporary directory if not exists
    is_dir($box['tmp_dir']) || mkdir($box['tmp_dir'], 0777, true);

    // reconfigure
    $fw->setDev('dev' === $box['env']);
    $fw->setEntry($box['entry']);
    $fw->setLoadDirectories($projectDir . '/templates');

    // update log directory
    $log->setOptions(array(
        'directory' => $box['tmp_dir'] . '/logs',
        'threshold' => $fw->isDev() ? Log::LEVEL_DEBUG : Log::LEVEL_INFO,
    ));

    // services
    $di->load(__DIR__ . '/services.php');

    // setup
    fw($fw);

    // listeners
    $dispatcher->on(Fw::EVENT_ERROR, function (ErrorEvent $event, Fw $fw) {
        $event->setOutput(load('error', array(
            'dev' => $fw->isDev(),
            'code' => $event->getCode(),
            'text' => $event->getText(),
            'trace' => $event->getTrace(),
            'message' => $event->getMessage(),
        )));
    });

    // routes
    Arr::each(
        require __DIR__ . '/routes.php',
        static fn($handler, $route) => $fw->route($route, $handler),
    );
});
