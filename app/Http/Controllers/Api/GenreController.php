<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GenreResource;
use Facades\App\Http\Services\ApiMovie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class GenreController extends Controller
{
    public function index()
    {
        $genres = ApiMovie::getGenresMovies();

        if (isset($genres['genres'])) {
            Cache::forget('all_genres');
            Cache::rememberForever('all_genres', function() use ($genres) {
                return $genres['genres'];
            });
        }

        return GenreResource::collection(cache('all_genres'));
    }
}
