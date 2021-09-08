import React from 'react';

const Portfolio = () => {

    return ((
        <>
            <div className='portfolio'>

                <h2 className="portfolio__title">Портфолио</h2>

                <div className="portfolio__container">

                    <div className="portfolio__container2">
                        <a href="" className="portfolio__link">Статичный сайт</a>
                        <a href="" className="portfolio__symbol">↗</a>
                    </div>


                    <div className="portfolio__container2">
                        <a href="" className="portfolio__link">Адаптивный сайт</a>
                        <a href="" className="portfolio__symbol">↗</a>
                    </div>

                    <div className="portfolio__container2">

                        <a href="" className="portfolio__link">Одностраничное приложение</a>
                        <a href="" className="portfolio__symbol">↗</a>
                    </div>

                </div>


            </div>
        </>

    ));
}

export default (Portfolio);
