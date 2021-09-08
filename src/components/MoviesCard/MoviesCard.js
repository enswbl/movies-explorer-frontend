import React from 'react';
import preview from "../../images/preview.png";
import like from "../../images/active-like.svg";

const MoviesCard = () => {

    return ((
        <>
            <div className='movies-card'>

                <img src={preview} alt=""/>
                <div>
                    <h3>Пи Джей Харви: A dog called money</h3>
                    <button className="header__button_account"><img src={like}/></button>
                </div>
<p>1ч 42м</p>
            </div>
        </>

    ));
}

export default (MoviesCard);
