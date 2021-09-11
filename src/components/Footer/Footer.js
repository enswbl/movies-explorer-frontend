import React from 'react';

const Footer = () => {

    return ((
        <>
            <div className='footer'>
                <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__container'>
                    <p className='footer__copyright'>&#169; 2021</p>
                    <div className='footer__nav'>
                        <a href="https://practicum.yandex.ru" className='footer__link'>Яндекс.Практикум</a>
                        <a href="https://github.com/enswbl" className='footer__link'>GitHub</a>
                    </div>
                </div>
            </div>
        </>

    ));
}

export default (Footer);