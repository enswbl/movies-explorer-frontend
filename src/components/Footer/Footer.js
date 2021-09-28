import React from 'react';
import {useLocation} from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return ((
        <>

{
                    (currentPath === '/' || currentPath === '/movies' || currentPath === '/saved-movies') &&

(            <footer className='footer'>
<p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
<div className='footer__container'>
    <p className='footer__copyright'>&#169; 2021</p>
    <div className='footer__nav'>
        <a href="https://practicum.yandex.ru" className='footer__link' target='_blank' rel="noopener noreferrer">Яндекс.Практикум</a>
        <a href="https://github.com/enswbl" className='footer__link' target='_blank' rel="noopener noreferrer">GitHub</a>
    </div>
</div>
</footer>)

                }


        </>

    ));
}

export default (Footer);