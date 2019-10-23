<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', 'Api\AuthController@register');
Route::post('/login', 'Api\AuthController@login');

Route::post('password/email', 'Api\ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'Api\ResetPasswordController@reset');

Route::get('show', 'Api\ShowController@index');
Route::get('show/{show}', 'Api\ShowController@show');
Route::post('show', 'Api\ShowController@store');
Route::put('show/{show}', 'Api\ShowController@update');
Route::delete('show/{show}', 'Api\ShowController@destroy');

Route::get('category', 'Api\CategoryController@index');
Route::get('category/{category}', 'Api\CategoryController@show');
Route::post('category', 'Api\CategoryController@store');
Route::put('category/{category}', 'Api\CategoryController@update');
Route::delete('category/{category}', 'Api\CategoryController@destroy');
