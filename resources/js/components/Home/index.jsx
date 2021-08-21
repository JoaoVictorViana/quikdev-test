import React, { Component, createContext } from 'react';
import Navbar from '../Navbar';
import ListItems from '../ListItems';
import { Content } from './style';
import { ListItemsContext } from '../../core/contexts/ListItemContext';
import { TitleContext } from '../../core/contexts/TitleContext';

class Home extends Component {
    constructor(props) {
        super(props);

        this.setMovies = movies => {
            this.setState({
                movies: movies
            })
        };

        this.setTitle = title => {
            this.setState({
                title: title
            })
        };

        this.state = {
            movies: [],
            title: 'Most popular movies'
        };
    }

    render() {
        return (
            <Content>

                <ListItemsContext.Provider
                    value={{movies: this.state.movies, setMovies: this.setMovies}}
                >
                    <TitleContext.Provider
                        value={{title: this.state.title, setTitle: this.setTitle}}
                    >
                        <Navbar />
                        <ListItems />
                    </TitleContext.Provider>
                </ListItemsContext.Provider>
            </Content>
        )
    }
}

export default Home;
