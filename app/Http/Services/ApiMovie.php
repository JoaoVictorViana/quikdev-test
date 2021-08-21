<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class ApiMovie
{

    protected $url_base = 'https://api.themoviedb.org/3';

    public function getTrendingMovies()
    {
        $url = "{$this->url_base}/trending/movie/day";

        $response = Http::get($url, [
            'api_key' => env('API_KEY_MOVIE')
        ]);

        return json_decode($response->body(), true);
    }

    public function findMovieById(int $id)
    {
        $url = "{$this->url_base}/movie/{$id}";

        $response = Http::get($url, [
            'api_key' => env('API_KEY_MOVIE')
        ]);

        return json_decode($response->body(), true);
    }

    public function searchMovie(string $query)
    {
        $url = "{$this->url_base}/search/movie";

        $response = Http::get($url, [
            'api_key' => env('API_KEY_MOVIE'),
            'query' => $query
        ]);

        return json_decode($response->body(), true);
    }

    public function filterMovieByGenre(string $genre)
    {
        $url = "{$this->url_base}/discover/movie";

        $response = Http::get($url, [
            'api_key' => env('API_KEY_MOVIE'),
            'with_genres' => $genre
        ]);

        return json_decode($response->body(), true);
    }
    
    public function getGenresMovies()
    {
        $url = "{$this->url_base}/genre/movie/list";
    
        $response = Http::get($url, [
            'api_key' => env('API_KEY_MOVIE'),
        ]);

        return json_decode($response->body(), true);
    }

    public function findGenreById(int $id)
    {
        if (! cache('all_genres')) {
            $genres = $this->getGenresMovies();

            Cache::rememberForever('all_genres', function() use ($genres) {
                return $genres['genres'];
            });
        }

        $genres = array_filter(
            cache('all_genres'),
            function($genre) use ($id) {
                return $genre['id'] == $id;
            }
        );

        if (count($genres)){
            return array_pop($genres);
        }

        return ['id' => '', 'name' => ''];
    }
}