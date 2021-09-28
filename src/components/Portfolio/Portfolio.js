import React from 'react';

const Portfolio = () => {

    return ((
        <>
            <div className='portfolio'>

                <h2 className="portfolio__title">Портфолио</h2>

                <div className="portfolio__container">

                    <div className="portfolio__element">
                        <a href="https://github.com/enswbl/how-to-learn" className="portfolio__link" target='_blank' rel="noopener noreferrer">Статичный сайт</a>
                        <a href="https://github.com/enswbl/how-to-learn" className="portfolio__symbol" target='_blank' rel="noopener noreferrer">↗</a>
                    </div>

                    <div className="portfolio__element">
                        <a href="https://github.com/enswbl/russian-travel" className="portfolio__link" target='_blank' rel="noopener noreferrer">Адаптивный
                            сайт</a>
                        <a href="https://github.com/enswbl/russian-travel" className="portfolio__symbol" target='_blank' rel="noopener noreferrer">↗</a>
                    </div>

                    <div className="portfolio__element">

                        <a href="https://mestoapp.nomoredomains.club" className="portfolio__link" target='_blank' rel="noopener noreferrer">Одностраничное
                            приложение</a>
                        <a href="https://mestoapp.nomoredomains.club" className="portfolio__symbol" target='_blank' rel="noopener noreferrer">↗</a>
                    </div>

                </div>


            </div>
        </>

    ));
}

export default (Portfolio);
