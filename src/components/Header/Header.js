import React from 'react';
import Logo from '../../images/logo.svg'


function Header() {
    return ((
        <header className='header'>
            <img src={Logo} alt='Логотип' className='header__logo'/>



            <button>Фильмы</button>
            <button>Сохраненные фильмы</button>

            <button>Регистрация</button>
            <button>Войти</button>

            <button>Аккаунт</button>

        </header>
    ));
}

export default Header;
