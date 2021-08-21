<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MovieTest extends TestCase
{
    /**
     * Popular movies test.
     *
     * @return void
     */
    public function test_trending_movie()
    {
        $response = $this->get('/api/movie/trending');

        $response->assertStatus(200)
                ->assertJsonCount(20, 'data');
    }

    /**
     * Movie Search Test.
     *
     * @return void
     */
    public function test_search_movie()
    {
        $response = $this->get('/api/movie/search/thor');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => [
                            'movie_id',
                            'title',
                            'overview',
                            'poster',
                            'genres',
                            'release_date',
                        ]
                    ]
                ]);
    }

    /**
     * Movie Filter Test by Genre.
     * In this test, the action genre with id 28 was used.
     *
     * @return void
     */
    public function test_filter_movie()
    {
        $response = $this->get('/api/movie/filter/28');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => [
                            'movie_id',
                            'title',
                            'overview',
                            'poster',
                            'genres',
                            'release_date',
                        ]
                    ]
                ]);
    }

    /**
     * Test for movie details.
     *
     * @return void
     */
    public function test_find_movie_details()
    {
        $response = $this->get('/api/movie/id/284053');

        $response->assertStatus(200)
                ->assertExactJson([
                    'data' => [
                        'movie_id' => 284053,
                        'title' => 'Thor: Ragnarok',
                        'overview' => 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.',
                        'poster' => 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
                        'genres' => [
                            [
                                'genre_id' => 28,
                                'name' => 'Action'
                            ],
                            [
                                'genre_id' => 12,
                                'name' => 'Adventure'
                            ],
                            [
                                'genre_id' => 35,
                                'name' => 'Comedy'
                            ],
                            [
                                'genre_id' => 14,
                                'name' => 'Fantasy'
                            ],
                            [
                                'genre_id' => 878,
                                'name' => 'Science Fiction'
                            ]
                        ],
                        'release_date' => '25/10/2017'
                    ]
                ]);
    }
}
