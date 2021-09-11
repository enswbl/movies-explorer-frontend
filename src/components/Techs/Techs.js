import React from 'react';

const Techs = ({myRef}) => {


    return ((
        <>
            <div className="techs" ref={myRef}>

                <h2 className="techs__title">Технологии</h2>

                <h1 className="techs__subtitle">7 технологий</h1>

                <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <nav className="techs__nav">
                    <p className="techs__link">HTML</p>
                    <p className="techs__link">CSS</p>
                    <p className="techs__link">JS</p>
                    <p className="techs__link">React</p>
                    <p className="techs__link">Express.js</p>
                    <p className="techs__link">mongoDB</p>
                    <p className="techs__link">Git</p>
                </nav>

            </div>

        </>
    ));
}

export default Techs;
