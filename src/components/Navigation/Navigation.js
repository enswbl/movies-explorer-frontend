import React from 'react';
import {Link} from "react-router-dom";
import account from "../../images/account.svg";
import close from "../../images/close.svg";

const Navigation = ({isOpen}) => {
    /*
        console.log('isOpen 1', isOpen)

        const [open, seOpen] = React.useState({isOpen: false})

        console.log('isOpen 2', isOpen)

        const useSetIsOpen = () => {
            seOpen({isOpen: false})
        }*/

    console.log('isOpen 1', isOpen)

    const useSetIsOpen = () => {
        isOpen = false;
        console.log('isOpen 3', isOpen)
        return isOpen;
    }

    console.log('isOpen 2', isOpen)

    return ((
        <>
            <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
                <button onClick={useSetIsOpen}><img src={close} className='header__logo'/></button>
                <Link className='header__button' to="/">Главная</Link>
                <Link className='header__button' to="/movies">Фильмы</Link>
                <Link className='header__button' to="/saved-movies">Сохранённые фильмы</Link>
                <Link className='header__button' to="/profile">Аккаунт</Link>
                <img src={account} alt="Аккаунт"/>
            </div>
        </>
    ));
}

export default Navigation;
