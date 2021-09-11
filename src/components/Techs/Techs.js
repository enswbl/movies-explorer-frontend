import React from 'react';

const Techs = ({myRef}) => {


    return ((
        <>
            <div className="promo" ref={myRef}> {/* TODO*/}

                <h2 className="about-project__title">Технологии</h2>

                <h1 className="promo__title">7 технологий</h1>

                <p>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <nav className="promo__nav">
                    <p className="promo__link">HTML</p>
                    <p className="promo__link">CSS</p>
                    <p className="promo__link">JS</p>
                    <p className="promo__link">React</p>
                    <p className="promo__link">Express.js</p>
                    <p className="promo__link">mongoDB</p>
                    <p className="promo__link">Git</p>
                </nav>

            </div>

        </>
    ));
}

export default Techs;
