import React from 'react';
import preview from "../../images/preview.png";
// import activeLike from "../../images/active-like.svg";
import inactiveLike from "../../images/inactive-like.svg";
import removeLike from "../../images/remove-like.svg";
import {Route} from 'react-router-dom';

const MoviesCard = () => {

    return ((
        <>
            <li className='movies-card'>
                <Route path="/movies">
                    <img className="movies-card__preview" src={preview} alt="#"/>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">
                            <h4 className="movies-card__title">Пи Джей Харви: A dog called money</h4>
                            <button className="movies-card__button"><img src={inactiveLike} alt="#"/></button>
                        </div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </div>
                </Route>
                <Route path="/saved-movies">
                    <img className="movies-card__preview" src={preview} alt="#"/>
                    <div className="movies-card__container-info">
                        <div className="movies-card__info">
                            <h4 className="movies-card__title">Пи Джей Харви: A dog called money</h4>
                            <button className="movies-card__button"><img src={removeLike} alt="#"/></button>
                        </div>
                        <p className="movies-card__duration">1ч 42м</p>
                    </div>
                </Route>
            </li>
        </>
    ));
}

export default (MoviesCard);
