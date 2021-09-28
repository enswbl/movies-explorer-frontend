import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../images/logo.svg'
import useWindowDimensions from '../../utils/getCurrentWidth'
import account from '../../images/account.svg'
import menu from '../../images/menu.svg'
import Navigation from "../Navigation/Navigation";
import close from "../../images/close.svg";

const Header = ({isOpen, useSetIsOpen, useSetIsClose, loggedIn}) => {

    const location = useLocation();
    const currentPath = location.pathname;

    const {width} = useWindowDimensions();

    return ((
        <header className='header'>

            {(currentPath === '/') && (
                (loggedIn) ?
                    <>
                        <Link to='/'><img src={logo} alt='Логотип' className='header__logo'/></Link>
                        {/*<div> */}
                        <div>
                            <Link className='header__button' to="/movies">Фильмы</Link>
                            <Link className='header__button' to="/saved-movies">Сохранённые фильмы</Link>
                        </div>
                        <div className="header__account">
                            <Link className='header__button' to="/profile">Аккаунт</Link>
                            <Link to="/profile" className="header__button_account"><img src={account}
                                                                                        alt="Аккаунт"/></Link>
                        </div>
                        {/*</div>*/}
                    </>
                    :
                    <>
                        <Link to='/'><img src={logo} alt='Логотип' className='header__logo'/></Link>
                        <div>
                            <Link className='header__button' to="/sign-up">Регистрация</Link>
                            <Link className='header__button header__button_sign-in' to="/sign-in">Войти</Link>
                        </div>
                    </>)
            }

            {(currentPath === '/movies' || currentPath === '/saved-movies' || currentPath === '/profile') &&

            (<>

                {(width <= 768) &&

                <>
                    <Link to='/'><img src={logo} alt='Логотип' className='header__logo'/></Link>

                    {
                        isOpen ?
                            <>
                                <div className="header__background">
                                    <div className="header__menu">
                                        <button onClick={useSetIsClose} className="header__button_close"><img
                                            className="header__img_close" src={close} alt="Закрыть"/></button>
                                        <Navigation isOpen={isOpen}/>
                                    </div>
                                </div>
                            </>
                            :
                            <button onClick={useSetIsOpen} className="header__button_menu"><img
                                className="header__img_menu" src={menu} alt="Меню"/></button>
                    }
                </>
                }

                {(width > 768) &&
                <>

                    <Link to='/'><img src={logo} alt='Логотип' className='header__logo'/></Link>
                    <div>

                        {
                            (currentPath === '/movies') &&
                            (<>
                                <Link className='header__button' to="/movies" style={{fontWeight: "500"}}>Фильмы</Link>
                                <Link className='header__button' to="/saved-movies">Сохранённые фильмы</Link>
                            </>)

                        }

                        {
                            (currentPath === '/saved-movies') &&
                            (<>
                                <Link className='header__button' to="/movies">Фильмы</Link>
                                <Link className='header__button' to="/saved-movies" style={{fontWeight: "500"}}>Сохранённые
                                    фильмы</Link>
                            </>)

                        }

                        {
                            (currentPath === '/profile') &&
                            (<>
                                <Link className='header__button' to="/movies">Фильмы</Link>
                                <Link className='header__button' to="/saved-movies">Сохранённые
                                    фильмы</Link>
                            </>)

                        }

                    </div>

                    <div className="header__account">
                        {currentPath === '/profile' ?
                            <Link className='header__button' to="/profile" style={{fontWeight: "500"}}>Аккаунт</Link>
                            :
                            <Link className='header__button' to="/profile">Аккаунт</Link>
                        }
                        <Link to="/profile" className="header__button_account"><img src={account} alt="Аккаунт"/></Link>
                    </div>
                </>
                }
            </>)

            }

            {(currentPath === '/sign-up' || currentPath === '/sign-in' || currentPath === '/404') &&
            (
                <>
                </>
            )
            }
        </header>
    ));
}

export default Header;
