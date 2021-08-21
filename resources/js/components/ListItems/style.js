import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

export const TitleResult = styled.h1`
    font-size: 2em;
    color: #fafafa;
    margin: 3vh 1vh;
`;

export const MoviePoster = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
`;

export const MovieImage = styled.img`
    height: 100%;
    width: auto;
`;

export const MovieHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const MovieTitle = styled.h1`
    font-size: 1.5em;
    color: #fafafa;
    margin: 1vh 0;
`;

export const MovieOverview = styled.p`
    font-size: 1em;
    color: #fafafa;
`;

export const MovieReleaseDate = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 0.8em;
    color: #fafafa;
    
`;

export const MovieGenres = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 1vh;
`;

export const MovieGenre = styled.cite`
    font-size: 0.6em;
    color: #fafafa;
    background-color: #8257e5;
    padding: 0.4em 0.6em;
    margin-right: 2vh;
    border-radius: 3px;
`;

export const ModalDetails = styled(Modal)`
    .modal-content {
        background-color: #1D1D20;
    }
`;

export const ModalPoster = styled(Modal.Header)`
    flex-direction: column;
    height: 50vh;
    width: 100%;
    padding: 0;
`;

export const ModalImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 20% 10%;
`;

export const ModalButton = styled(Button)`
    background-color: #8257e5;
`;