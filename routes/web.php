<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('my_services' , function(){
    return view('services');
});

Route::get('my_skills' , function(){
    return view('skills');
});

Route::get('contact me' , function(){
    return view('contact');
});

Route::get('sql_me' , function(){
    return view('sql');
});