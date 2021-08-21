<?php

namespace App\Http\Resources;

use Facades\App\Http\Services\ApiMovie;
use Illuminate\Http\Resources\Json\JsonResource;

class GenreResource extends JsonResource
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
            'genre_id' => $this['id'] ?? $this->resource,
            'name' => $this['name'] ?? ApiMovie::findGenreById($this->resource)['name'],
        ];
    }
}
