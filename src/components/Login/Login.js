import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Logo from "../../images/logo.svg";

const Login = ({handleLogin}) => {
    const [userData, setUserData] = React.useState({email: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(userData)

    }

    return ((
        <>
            <form action='#' method='GET' onSubmit={handleSubmit} className="register">
                <img src={Logo} alt='Логотип' className='register__logo'/>
                <h1 className='register__title'>Рады видеть!</h1>

                <label className='register__label'>E-mail</label>
                <input onChange={handleChange}
                       value={userData.email}
                       id="email"
                       name="email"
                       className="register__input"
                       type='email'
                       minLength='2'
                       maxLength='30'
                    /*autoComplete='off'*/
                       required/>
                <span className='register__error'>Что-то пошло не так...</span>

                <label className='register__label'>Пароль</label>
                <input onChange={handleChange}
                       value={userData.password}
                       id="password"
                       name="password"
                       className="register__input"
                       type='password'
                       minLength='2'
                       maxLength='30'
                    /*autoComplete='off'*/
                       required/>
                <span className='register__error'/>

                <button type="submit" className="register__button login__button">Войти</button>

                <div className='register__container'>
                    <label className='register__link register__link_label'>Ещё не зарегистрированы?</label>
                    <Link to="/sign-up" className="register__link">Регистрация</Link>
                </div>

            </form>
        </>

    ));
}

export default withRouter(Login);
