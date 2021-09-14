import React from 'react';
import preview from "../../images/preview.png";
// import activeLike from "../../images/active-like.svg";
import inactiveLike from "../../images/inactive-like.svg";
import removeLike from "../../images/remove-like.svg";
import {Route} from 'react-router-dom';

const MoviesCard = () => {

    const [like, setLike] = React.useState(false);

    const handleLikeClick = () => {
        setLike(true);
    };

    const handleRemoveLikeClick = () => {
        setLike(false);
    };

    return ((
        <>
            <li className='movies-card'>
                <Route path="/movies">
                    <img className="movies-card__preview" src={preview} alt="Обложка фильма"/>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">

                            <h4 className="movies-card__title">Пи Джей Харви: A dog called money</h4>

                            {like ?
                                <button className="movies-card__button movies-card__button_active movies-card__button_hover-remove" onClick={handleRemoveLikeClick}></button>
                                :
                                <button
                                    className="movies-card__button movies-card__button_hover-active"
                                    onClick={handleLikeClick}></button>
                            }

                        </div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </div>
                </Route>
                <Route path="/saved-movies">
                    <img className="movies-card__preview" src={preview} alt="Обложка фильма"/>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">
                            <h4 className="movies-card__title">Пи Джей Харви: A dog called money</h4>
                            <button className="movies-card__button"><img src={removeLike} alt="Удалить"/></button>
                        </div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </div>
                </Route>
            </li>
        </>
    ));
}

export default (MoviesCard);
