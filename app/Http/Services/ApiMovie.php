<?php

namespace App\Http\Services;

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
}