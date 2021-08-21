import React, { Component, useContext } from 'react';
import {
    Header,
    SearchForm,
    Title,
    Nav,
    GenreDropdown,
    SearchInput
} from './style';
import { searchMovie, getGenres, filterMoviesByGenre, getTrendingMovies } from '../../core/services/api';
import { ListItemsContext } from '../../core/contexts/ListItemContext';
import { TitleContext } from '../../core/contexts/TitleContext';
import { Dropdown } from 'react-bootstrap';

const Search = () => {
    const { setMovies } = useContext(ListItemsContext);
    const { setTitle } = useContext(TitleContext);

    const handleSearchMovie = e => {
        const search = e.target.value;
        if (search) {
            searchMovie(setMovies, search);
            setTitle(`Search results for: "${search}"`);
        } else {
            getTrendingMovies(setMovies);
            setTitle('Most popular movies');
        }
    }

    return (
        <SearchForm>
            <SearchInput
                type="search"
                name="search"
                onChange={handleSearchMovie}
            />
        </SearchForm>
    );
}

const Genres = ({genres}) => {
    const { setMovies } = useContext(ListItemsContext);
    const { setTitle } = useContext(TitleContext);

    const handleSelectGenre = e => {
        const genre_id = e.target.getAttribute('genre_id');

        filterMoviesByGenre(setMovies, genre_id);
        setTitle(`Best "${e.target.innerText}" movies`);
    }

    return (
        <GenreDropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {genres
                    && genres.map(genre => (
                        <Dropdown.Item key={genre.genre_id} genre_id={genre.genre_id} onClick={handleSelectGenre}>{genre.name}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </GenreDropdown>
    );
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            genres: []
        };

        this.handleGenres = this.handleGenres.bind(this);

        getGenres(this.handleGenres);
    }

    handleGenres(new_genres) {
        this.setState({
            genres: new_genres.data
        });
    }

    render() {
        return (
            <Header>
                <Title>QUIKDEV MOVIES</Title>

                <Nav>
                    <Search />
                    <Genres genres={this.state.genres}/>
                </Nav>
            </Header>
        );
    }
}

export default Navbar;