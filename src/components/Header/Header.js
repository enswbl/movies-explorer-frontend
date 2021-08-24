import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../images/logo.svg'
import account from '../../images/account.svg'


const Header = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return ((
        <header className='header'>

            <div className='header__container'>
                {currentPath === '/' &&
                <>
                    <a href='/'><img src={logo} alt='Логотип' className='header__logo'/></a>
                    <Link className='header__button' to="/sign-up">Регистрация</Link>
                    <Link className='header__button' to="/sign-in">Войти</Link>
                </>
                }

                {currentPath === '/movies' || currentPath === '/saved-movies' || currentPath === '/profile' &&
                <>
                    <a href='/'><img src={logo} alt='Логотип' className='header__logo'/></a>
                    <Link className='header__button' to="/movies">Фильмы</Link>
                    <Link className='header__button' to="/saved-movies">Сохранённые фильмы</Link>
                    <Link className='header__button' to="/profile">Аккаунт</Link>
                    <img src={account} alt="Аккаунт"/>
                </>
                }

                {currentPath === '/sign-up' || currentPath === '/sign-in' || currentPath === '/404' &&
                <>
                </>
                }
            </div>
        </header>
    ));
}

export default Header;
