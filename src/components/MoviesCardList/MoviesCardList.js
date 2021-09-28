import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from 'react-router-dom';

const MoviesCardList = ({currentCards, setMovieLike, unsetMovieLike}) => {


    return ((
        <>
            <section className='movies-card-list'>

                <ul className="movies-card-list__containter">
                    {currentCards.map((item) => (

// console.log('item', item)

                        <MoviesCard
                            // duration={item.duration}
                            // image={'https://api.nomoreparties.co' + item.image.url}
                            // nameRU={item.nameRU}
                            // trailerLink={item.trailerLink}
                            // id={item.id}
                            {...item}
                            key={item.id}

                            setMovieLike={setMovieLike}
                            unsetMovieLike={unsetMovieLike}
                        />
                        ))}
                </ul>
                <Route path="/movies">
                    <button className="movies-card-list__button">Ещё</button>
                </Route>
            </section>
        </>

    ));
}

export default (MoviesCardList);