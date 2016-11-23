<?php

/*
|--------------------------------------------------------------------------
| Module Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for the module.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::group(['prefix' => 'accounts'], function() {
	Route::get('/', 'AccountController@index');
	Route::get('/{id}', 'AccountController@show');
	Route::post('/', 'AccountController@store');
	Route::put('/{id}', 'AccountController@update');
	Route::delete('/{id}', 'AccountController@destroy');
});
