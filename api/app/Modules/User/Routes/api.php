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
	Route::get('/verify/email',['uses' => 'UserController@verifyemail', 'as' => 'user.verifyemail']);
	Route::get('/user', ['uses' => 'UserController@index', 'as' => 'user.index']);
	Route::post('/signup', ['uses' => 'UserController@store', 'as' => 'user.store']);
	Route::patch('/user/{id}', ['uses' => 'UserController@update', 'as' => 'user.update']);
	Route::get('/user/{id}', ['uses' => 'UserController@show', 'as' => 'user.show']);
	Route::delete('/user/{id}', ['uses' => 'UserController@destroy', 'as' => 'user.destoy']);