import React from 'react';

const Promo = () => {

    return ((
        <>

            <div className="promo">

                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>

                <nav className="promo__nav"> {/*TODO, nav, links*/}
                    <a href="#" className="promo__link">О проекте</a>
                    <a href="#" className="promo__link">Технологии</a>
                    <a href="#" className="promo__link">Студент</a>
                </nav>

            </div>

        </>
    ));
}

export default Promo;
