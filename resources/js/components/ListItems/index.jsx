import React, { Component, useContext } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { getTrendingMovies, findMovieById } from '../../core/services/api';
import { ListItemsContext } from '../../core/contexts/ListItemContext';
import { TitleContext } from '../../core/contexts/TitleContext';
import { Modal } from 'react-bootstrap';
import {
    TitleResult,
    MoviePoster,
    MovieImage,
    MovieHeader,
    MovieGenres,
    MovieGenre,
    MovieOverview,
    MovieTitle,
    MovieReleaseDate,
    ModalDetails,
    ModalPoster,
    ModalImage,
    ModalButton
} from './style';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class ListItems extends Component {
    static contextType = ListItemsContext;

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            modalMovie: {},
            showModal: false
        };

        this.initSwiper = this.initSwiper.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        getTrendingMovies(this.initSwiper);
    }

    initSwiper(trending_movies) {
        const { setMovies } = this.context;

        setMovies(trending_movies);
    }

    handleClose(){
        this.setState({
            showModal: false
        });
    };

    handleShow(movie_id){

        findMovieById(movie => {
            this.setState({
                modalMovie: movie,
                showModal: true
            });
        }, movie_id);
    };

    formatOverview(overview) {
        const words = overview.split(' ');
        return words.reduce((carry, word, index) => {
            if (index === 0) {
                carry += `${word}`;                
            } else if (index > 0 && index <= 30) {
                carry += ` ${word}`;                
            } else if (index === 31) {
                carry += '...';
            }

            return carry;
        });
    }

    render() {
        const { movies } = this.context;
        const { modalMovie } = this.state;
    
        return (
            <div>
                <TitleContext.Consumer>
                    {({title}) => (
                        <TitleResult>{title}</TitleResult>
                    )}
                </TitleContext.Consumer>
                
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {movies
                        && movies.map(movie => (
                            <SwiperSlide
                                onClick={() => this.handleShow(movie.movie_id)}
                                key={movie.movie_id}
                            >
                                <MoviePoster>
                                    <MovieImage src={movie.poster} alt={movie.title} />
                                </MoviePoster>
                                
                                <MovieHeader>
                                    <MovieTitle>{movie.title}</MovieTitle>
                                    <MovieGenres>
                                        {movie.genres
                                            && movie.genres.map(genre => (
                                                <MovieGenre
                                                    key={genre.id}
                                                >
                                                    {genre.name}
                                                </MovieGenre>
                                            ))
                                        }
                                    </MovieGenres>
                                </MovieHeader>

                                <MovieOverview>
                                    {this.formatOverview(movie.overview)}
                                </MovieOverview>

                                <MovieReleaseDate>
                                    <span>Release date: {movie.release_date}</span>
                                </MovieReleaseDate>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <ModalDetails size="lg" show={this.state.showModal} onHide={this.handleClose}>
                    <ModalPoster>
                        <ModalImage src={modalMovie.poster} alt={modalMovie.title} />
                    </ModalPoster>
                    <Modal.Body>
                        <MovieHeader>
                            <MovieTitle>{modalMovie.title}</MovieTitle>
                            <MovieGenres>
                                {modalMovie.genres
                                        && modalMovie.genres.map(genre => (
                                            <MovieGenre key={genre.id}>
                                                {genre.name}
                                            </MovieGenre>
                                        ))
                                }
                            </MovieGenres>
                        </MovieHeader>
                        
                        <MovieOverview>{modalMovie.overview}</MovieOverview>

                        <MovieReleaseDate>
                            <span>
                                Release date: {modalMovie.release_date}
                            </span>
                        </MovieReleaseDate>
                    </Modal.Body>

                    <Modal.Footer>
                        <ModalButton variant="secondary" onClick={this.handleClose}>Close</ModalButton>
                    </Modal.Footer>
                </ModalDetails>
            </div>
        );
    }
}

export default ListItems;
