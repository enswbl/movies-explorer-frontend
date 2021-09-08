import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {

    return ((
        <>
            <section className='movies-card-list'>


                <MoviesCard/>

                <button>Ещё</button>

            </section>
        </>

    ));
}

export default (MoviesCardList);
