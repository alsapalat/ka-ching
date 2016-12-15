<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your module. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
	Route::get('/verify/email','UserController@verifyemail');
	Route::get('/user','UserController@index');
	Route::post('/signup', 'UserController@store');
	Route::patch('/user/{id}', 'UserController@update');
	Route::get('/user/{id}', 'UserController@show');
	Route::delete('/user/{id}', 'UserController@destroy');
