import React from 'react';
import unsetLike from "../../images/unset-like.svg";
import {Route} from 'react-router-dom';
import {setMovieLike, unsetMovieLike} from "../../utils/MainApi";

const MoviesCard = (movieData) => {

    const BASE_URL = 'https://api.nomoreparties.co';

    const movie = {
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: movieData.image ? BASE_URL + movieData.image.url : 'Нет картинки',
        trailer: movieData.trailerLink,
        thumbnail: movieData.image.formats ? BASE_URL + movieData.image.formats.thumbnail.url : 'Нет картинки',
        movieId: movieData.id || movieData.movieId,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN
    }

    const [like, setLike] = React.useState(false);
    const [likedMovies, setLikedMovies] = React.useState();

    const handleSetLikeClick = () => {
        setLike(true);
        setMovieLike(movie)
            .then((res) => {
                console.log('res 1', res)

                setLikedMovies(res)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const handleUnsetLikeClick = () => {
        setLike(false);
        unsetMovieLike(likedMovies.movie._id)
            .then((res) => {
                console.log('res 2', res)

                setLikedMovies(res)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const time = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = Math.floor(duration - (hours * 60));

        return `${hours}ч ${minutes}м`;
    }

    return ((
        <>
            <li className='movies-card'>
                <Route path="/movies">
                    <a href={movieData.trailerLink} target='_blank' rel="noopener noreferrer"><img
                        className="movies-card__preview" src={movie.image} alt={movieData.nameRU}/></a>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">

                            <h4 className="movies-card__title">{movieData.nameRU}</h4>

                            {like ?
                                <button
                                    className="movies-card__button movies-card__button_active movies-card__button_hover-remove"
                                    onClick={handleUnsetLikeClick}/>
                                :
                                <button
                                    className="movies-card__button movies-card__button_hover-active"
                                    onClick={handleSetLikeClick}/>
                            }

                        </div>
                        <p className="movies-card__duration"> {time(movieData.duration)} </p>
                    </div>
                </Route>
                <Route path="/saved-movies">
                    <a href={movieData.trailerLink} target='_blank' rel="noopener noreferrer"><img
                        className="movies-card__preview" src={movie.image} alt={movieData.nameRU}/></a>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">
                            <h4 className="movies-card__title">{movieData.nameRU}</h4>
                            <button className="movies-card__button" onClick={handleUnsetLikeClick}><img src={unsetLike}
                                                                                                        alt="Убрать лайк"/>
                            </button>
                        </div>
                        <p className="movies-card__duration">{time(movieData.duration)}</p>
                    </div>
                </Route>
            </li>
        </>
    ));
}

export default (MoviesCard);
