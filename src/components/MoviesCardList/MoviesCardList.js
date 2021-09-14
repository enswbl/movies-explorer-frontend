import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from 'react-router-dom';

const MoviesCardList = () => {

    return ((
        <>
            <section className='movies-card-list'>

                <ul className="movies-card-list__containter">
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                </ul>
                <Route path="/movies">
                    <button className="movies-card-list__button">Ещё</button>
                </Route>
            </section>
        </>

    ));
}

export default (MoviesCardList);
