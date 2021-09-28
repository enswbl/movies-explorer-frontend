import React from 'react';
import unsetLike from "../../images/unset-like.svg";
import {Route} from 'react-router-dom';

const MoviesCard = ({nameEN, movieId, thumbnail, trailer, description, country, year, director, duration, image, nameRU, trailerLink, setMovieLike, unsetMovieLike, id}) => {

    console.log(setMovieLike)

    


    const movie = {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
        // owner: req.user._id,,
    }

    const img = 'https://api.nomoreparties.co' + image.url;

    const [like, setLike] = React.useState(false);

    const handleSetLikeClick = () => {
        setLike(true);
        setMovieLike(movie);
    };

    const handleUnsetLikeClick = () => {
        setLike(false);
        unsetMovieLike(id);
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
                    <a href={trailerLink} target='_blank' rel="noopener noreferrer"><img className="movies-card__preview" src={img} alt={nameRU}/></a>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">

                            <h4 className="movies-card__title">{nameRU}</h4>

                            {like ?
                                <button className="movies-card__button movies-card__button_active movies-card__button_hover-remove" onClick={handleUnsetLikeClick}></button>
                                :
                                <button
                                    className="movies-card__button movies-card__button_hover-active"
                                    onClick={handleSetLikeClick}></button>
                            }

                        </div>
                        <p className="movies-card__duration"> {time(duration)} </p>
                    </div>
                </Route>
                <Route path="/saved-movies">
                <a href={trailerLink} target='_blank' rel="noopener noreferrer"><img className="movies-card__preview" src={img} alt={nameRU}/></a>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">
                            <h4 className="movies-card__title">{nameRU}</h4>
                            <button className="movies-card__button" onClick={handleUnsetLikeClick}><img src={unsetLike} alt="Убрать лайк"/></button>
                        </div>
                        <p className="movies-card__duration">{time(duration)}</p>
                    </div>
                </Route>
            </li>
        </>
    ));
}

export default (MoviesCard);
