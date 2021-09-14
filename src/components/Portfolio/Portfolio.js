import React from 'react';

const Portfolio = () => {

    return ((
        <>
            <div className='portfolio'>

                <h2 className="portfolio__title">Портфолио</h2>

                <div className="portfolio__container">

                    <div className="portfolio__element">
                        <a href="https://github.com/enswbl/how-to-learn" className="portfolio__link">Статичный сайт</a>
                        <a href="https://github.com/enswbl/how-to-learn" className="portfolio__symbol">↗</a>
                    </div>

                    <div className="portfolio__element">
                        <a href="https://github.com/enswbl/russian-travel" className="portfolio__link">Адаптивный
                            сайт</a>
                        <a href="https://github.com/enswbl/russian-travel" className="portfolio__symbol">↗</a>
                    </div>

                    <div className="portfolio__element">

                        <a href="https://mestoapp.nomoredomains.club" className="portfolio__link">Одностраничное
                            приложение</a>
                        <a href="https://mestoapp.nomoredomains.club" className="portfolio__symbol">↗</a>
                    </div>

                </div>


            </div>
        </>

    ));
}

export default (Portfolio);
