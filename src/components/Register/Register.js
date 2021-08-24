import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Logo from '../../images/logo.svg'

function Register({handleRegister}) {

    const [userData, setUserData] = React.useState({name: '', email: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(userData)
    }

    return ((

        <form action='#' method='GET' onSubmit={handleSubmit} className="register">
            <img src={Logo} alt='Логотип' className='register__logo'/>
            <h1 className='register__title'>Добро пожаловать!</h1>

            <label className='register__label'>Имя</label>
            <input onChange={handleChange}
                   value={userData.name}
                   id="name"
                   name="name"
                   className="register__input"
                   type='text'
                   minLength='2'
                   maxLength='40'
                /*autoComplete='off'*/
                   required/>

            <span className='register__error'/>

            <label className='register__label'>E-mail</label>
            <input onChange={handleChange}
                   value={userData.email}
                   id="email"
                   name="email"
                   className="register__input"
                   type='email'
                   minLength='2'
                   maxLength='40'
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
            <span className='register__error'> 123 </span>

            <button type="submit" className="register__button">Зарегистрироваться</button>

            <div className='register__container'>
                <label className='register__link register__link_label'>Уже зарегистрированы?</label>
                <Link to="/sign-in" className="register__link">Войти</Link>
            </div>

        </form>

    ));
}

export default withRouter(Register);
