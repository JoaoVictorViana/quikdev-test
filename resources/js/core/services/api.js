export const getTrendingMovies = (callback) => {
    fetch('/api/movie/trending')
        .then(response => response.json())
        .then(movies => callback(movies.data));
}

export const searchMovie = (callback, search) => {
    fetch(`/api/movie/search/${search}`)
        .then(response => response.json())
        .then(movies => callback(movies.data));
}

export const getGenres = (callback) => {
    fetch(`/api/genres`)
        .then(response => response.json())
        .then(genres => callback(genres));
}

export const filterMoviesByGenre = (callback, genre_id) => {
    fetch(`/api/movie/filter/${genre_id}`)
        .then(response => response.json())
        .then(movies => callback(movies.data));
}

export const findMovieById = (callback, movie_id) => {
    fetch(`/api/movie/id/${movie_id}`)
        .then(response => response.json())
        .then(movie => callback(movie.data));
}