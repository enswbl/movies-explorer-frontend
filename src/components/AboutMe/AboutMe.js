import React from 'react';
import plvn from "../../images/plvn.jpg";

const AboutMe = ({myRef}) => {

    return ((
        <>
            <div className='about-me' ref={myRef}>

                <h2 className="about-me__title">Студент</h2>

                <div className="about-me__container">

                    <div className="about-me__bio">
                        <h2 className="about-me__name">Виталий</h2>
                        <p className="about-me__paragraph">Фронтенд-разработчик, 30 лет</p>

                        <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики
                            СГУ. У меня есть жена и дочь. Я
                            люблю
                            слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

                        <a className="about-me__link" href="https://github.com/enswbl">GitHub</a>

                    </div>

                    <img className="about-me__photo" src={plvn} alt="Фото"/>

                </div>
            </div>
        </>

    ));
}

export default (AboutMe);
