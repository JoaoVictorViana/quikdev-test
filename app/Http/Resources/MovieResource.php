<?php

namespace App\Http\Resources;

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
            'release_date' => $this['release_date'],
            'title' => $this['title'],
            'poster' => $this['poster_path'],
            'genre_ids' => $this['genre_ids'],
            'overview' => $this['overview'],
        ];
    }
}
