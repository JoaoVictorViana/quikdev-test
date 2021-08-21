import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1D1D20;
    border-bottom: 1px solid #ccc;
    height: 10vh;
`;

export const Title = styled.h1`
    color: #F0F0F0;
    margin-left: 5vh;
    font-family: 'Times New Roman', Times, serif;
`;

export const SearchForm = styled.form`
    margin-right: 2vh;  
`;

export const SearchInput = styled.input`
    background-color: #121214;
    height: 5vh;
    border-radius: 5px;
    border-color: #121214;
    font-size: 1.2rem;
    color: #fafafa;
    padding-left: 10px;
    border: solid 2px #121215;

    &:focus {
        border: solid 2px #8257e5;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5vh;
`;

export const GenreDropdown = styled(Dropdown)`
    button, button:hover, button:active, button:link, button:focus {
        background-color: #8257e5 !important;
        opacity: 1;
        height: 5vh;
        width: 17vh;
        border: none !important;
        box-shadow: none !important;
        font-size: 1.2rem;
    }

    .dropdown-menu {
        transform: translate(0, 49px) !important;
    }

`;