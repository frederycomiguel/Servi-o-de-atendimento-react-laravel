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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/*
|--------------------------------------------------------------------------
| Basic Routes for a RESTful service:
|--------------------------------------------------------------------------
| Route::get($uri, $callback);
| Route::post($uri, $callback);
| Route::put($uri, $callback);
| Route::delete($uri, $callback);
*/

Route::get('services', 'ServicesController@index');
Route::get('services/{service}', 'ServicesController@show');
Route::post('services', 'ServicesController@store');
Route::put('services/{service}', 'ServicesController@update');
Route::delete('services/{service}', 'ServicesController@delete');
