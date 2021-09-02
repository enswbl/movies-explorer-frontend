import React from 'react';
import {Link, useLocation} from "react-router-dom";
import account from "../../images/account.svg";

const Navigation = ({isOpen}) => {

    const location = useLocation();
    const currentPath = location.pathname;

    const styles = {
        borderBottom: {
            borderBottomStyle: 'solid',
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            paddingBottom: 4,
        }
    };

    return ((
            <>
                <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>

                    <Link className='navigation__button' to="/">Главная</Link>

                    {
                        (currentPath === '/movies') &&
                        (<>

                            <Link className='navigation__button' to="/movies"
                                  style={styles.borderBottom}>Фильмы</Link>
                            <Link className='navigation__button' to="/saved-movies">Сохранённые фильмы</Link>

                        </>)

                    }

                    {
                        (currentPath === '/saved-movies') &&
                        (<>

                            <Link className='navigation__button' to="/movies">Фильмы</Link>
                            <Link className='navigation__button' to="/saved-movies" style={styles.borderBottom}>Сохранённые
                                фильмы</Link>

                        </>)
                    }

                    {
                        (currentPath === '/profile') &&
                        (<>

                            <Link className='navigation__button' to="/movies">Фильмы</Link>
                            <Link className='navigation__button' to="/saved-movies">Сохранённые
                                фильмы</Link>

                        </>)
                    }

                    <div className="header__account header__account_nav">
                        <Link className='header__button' to="/profile">Аккаунт</Link>
                        <button className="navigation__button_account"><img src={account}/></button>
                    </div>
                </div>

            </>
        )
    )
        ;
}

export default Navigation;


