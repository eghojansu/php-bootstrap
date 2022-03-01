<?php

return array(
    'GET @home /' => 'App\\Controller\\MainController@home',
    'GET @asset /assets/@path*' => 'App\\Controller\\AssetController@home',
);
