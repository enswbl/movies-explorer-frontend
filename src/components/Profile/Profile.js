import React from 'react';
import {Link, useHistory, withRouter} from 'react-router-dom';
import {getUserData, setUserInfo} from "../../utils/MainApi";

const Profile = () => {

    React.useEffect(() => {
        getUserData()
            .then((res) => {
                setCurrentUserData(res.user)
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }, [])

    const [currentUser, setCurrentUserData] = React.useState({name: '', email: ''});

    const [userData, setUserData] = React.useState({name: '', email: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo(userData)
            .then((res) => {
                setCurrentUserData(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const history = useHistory();

    const signOut = () => {
        localStorage.removeItem('token');
        history.push('/sign-up');
    }

    return ((
        <>
            <form action='#' method='GET' onSubmit={handleSubmit} className="profile">
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>

                <div className='profile__container'>

                    <label className='profile__label'>Имя</label>
                    <input onChange={handleChange}
                           value={userData.name}
                           id="name"
                           name="name"
                           className="profile__input"
                           type='text'
                           minLength='2'
                           maxLength='40'
                           autoComplete='off'
                           required/>

                    <label className='profile__label'>E-mail</label>
                    {/*<span className='popup__input-error-message profile-name-input-error-message'/>*/}
                    <input onChange={handleChange}
                           value={userData.email}
                           id="email"
                           name="email"
                           className="profile__input"
                           type='email'
                           minLength='2'
                           maxLength='40'
                           autoComplete='off'
                           required/>
                    {/*<span className='popup__input-error-message profile-name-input-error-message'/>*/}

                </div>

                <button className="profile__edit">Редактировать</button>
                <Link to="/sign-in" className="profile__logout" onClick={signOut}>Выйти из аккаунта</Link>

            </form>
        </>

    ));
}

export default withRouter(Profile);
