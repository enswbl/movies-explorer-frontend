import React from 'react';

const AboutProject = () => {

    return ((
        <>
            <div className='about-project'>

                <h2 className="about-project__title">О проекте</h2>

                <div className="about-project__description">
                    <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
                    <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.</p>
                    <p className="about-project__description-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.</p>
                </div>

                <div className="about-project__stages">
                    <p className="about-project__stages-title">1 неделя</p>
                    <p className="about-project__stages-title">4 недели</p>
                    <p className="about-project__stages-paragraph">Back-end</p>
                    <p className="about-project__stages-paragraph">Front-end</p>
                </div>


            </div>
        </>

    ));
}

export default (AboutProject);
