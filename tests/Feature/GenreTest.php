<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GenreTest extends TestCase
{
    /**
     * Test to get all genres.
     *
     * @return void
     */
    public function test_genres()
    {
        $response = $this->get('/api/genres');

        $response->assertStatus(200)
                ->assertJsonCount(19, 'data')
                ->assertJsonStructure([
                    'data' => [
                        '*' => [
                            'genre_id',
                            'name',
                        ]
                    ]
                ]);
    }
}
