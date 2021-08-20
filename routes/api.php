<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([
    'prefix' => 'movie'
], function() {
    Route::get('/trending', [\App\Http\Controllers\Api\MovieController::class, 'getTrendingMovies']);
    Route::get('/search/{query}', [\App\Http\Controllers\Api\MovieController::class, 'searchMovie']);
    // Route::get('/search/{query}', [\App\Http\Controllers\Api\MovieController::class, 'searchMovie']);
    Route::get('/filter/{filter}', [\App\Http\Controllers\Api\MovieController::class, 'filterMovieByGenre']);
});
