<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'movie_id' => $this['id'],
            'title' => $this['title'],
            'overview' => $this['overview'],
            'poster' => 'https://image.tmdb.org/t/p/w500' . $this['poster_path'],
            'genres' => isset($this['genre_ids'])
                ? GenreResource::collection($this['genre_ids'])
                : GenreResource::collection($this['genres']),
            'release_date' => Carbon::parse($this['release_date'])->format('d/m/Y'),
        ];
    }
}
