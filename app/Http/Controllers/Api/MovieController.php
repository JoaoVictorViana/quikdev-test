<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use Facades\App\Http\Services\ApiMovie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function getTrendingMovies()
    {
        $movies = ApiMovie::getTrendingMovies();

        return MovieResource::collection($movies['results']);
    }

    public function searchMovie(string $query)
    {
        $movies = ApiMovie::searchMovie($query);

        return MovieResource::collection($movies['results']);
    }

    public function filterMovieByGenre(string $genre)
    {
        $movies = ApiMovie::filterMovieByGenre($genre);

        return MovieResource::collection($movies['results']);
    }
}
