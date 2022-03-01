<?php

namespace App\Controller;

class MainController extends BaseController
{
    public function home()
    {
        return render('main.home');
    }
}
