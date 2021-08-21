<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use Facades\App\Http\Services\ApiMovie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class MovieController extends Controller
{
    public function getTrendingMovies()
    {
        // $movies = ApiMovie::getTrendingMovies();

        // if (isset($movies['results'])) {
        //     Cache::forget('trending_movies');
        //     Cache::rememberForever('trending_movies', function() use ($movies) {
        //         return $movies['results'];
        //     });
        // }

        return MovieResource::collection(cache('trending_movies'));
    }

    public function show(int $id)
    {
        $movie = ApiMovie::findMovieById($id);

        Cache::forget('movie_details_' . $id);
        Cache::rememberForever('movie_details_' . $id, function() use ($movie) {
            return $movie;
        });

        return new MovieResource(cache('movie_details_' . $id));
    }

    public function searchMovie(string $query)
    {
        $movies = ApiMovie::searchMovie($query);

        return MovieResource::collection($movies['results']);
    }

    public function filterMovieByGenre(string $genre)
    {
        $movies = ApiMovie::filterMovieByGenre($genre);

        if (isset($movies['results'])) {
            Cache::forget('movies_genre_' . $genre);
            Cache::rememberForever('movies_genre_' . $genre, function() use ($movies) {
                return $movies['results'];
            });
        }

        return MovieResource::collection(cache('movies_genre_' . $genre));
    }
}
