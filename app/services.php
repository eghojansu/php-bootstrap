<?php

use Ekok\Container\Box;
use Ekok\Sql\Connection;

return array(
    'db' => array(
        'alias' => true,
        'create' => function(Box $box) {
            $con = $box['connection.' . $box['connection.default']];

            return new Connection($box['log'], $con['dsn'], $con['username'] ?? null, $con['password'] ?? null, $con['options'] ?? null);
        },
    ),
);
