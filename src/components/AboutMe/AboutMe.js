import React from 'react';
import plvn from "../../images/plvn.jpg";

const AboutMe = () => {

    return ((
        <>
            <div className='about-me'>

                <h2 className="about-project__title">Студент</h2>

                <div className="about-me__container">

                    <div>

                        <h2>%NAME%</h2>
                        <p>Фронтенд-разработчик, 30 лет</p>

                        <p>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я
                            люблю
                            слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

                        <a href="">GitHub</a>

                    </div>

                    <img src={plvn} alt=""/>

                </div>
            </div>
        </>

    ));
}

export default (AboutMe);
