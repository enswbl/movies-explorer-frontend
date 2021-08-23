import React from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function App() {

    const [currentUser, setCurrentUserState] = React.useState({
        name: '',
        email: '',
    });


/*    const handleLogin = ({email, password}) => {
        return Auth.authorize({email, password})
            .then((res) => {
                if (res.user.token) {

                    setLoggedIn(true)
                    localStorage.setItem('token', res.user.token)

                    setTimeout(() => {
                        history.push('/users/me')
                    }, 2000)
                    return res;
                }
            })
            .catch(() => {
                console.log('Error!');
            })
    }*/

/*    const handleRegister = ({name, email, password}) => {
        return Auth.register({name, email, password})
            .then((res) => {
                if (res.user.email === email) {

                    setStatus(true)
                    setShowStatus({isOpen: true})

                    return res;
                }
            }).catch(() => {
                setStatus(false)
                setShowStatus({isOpen: true})
            })
    }*/


    return ((
        <>
            <CurrentUserContext.Provider value={currentUser}>
          {/*<Header/>*/}

                <main>

                <Switch>

                    <Route path='/sign-up'>
                        <Register/> {/*handleRegister={handleRegister}*/}
                    </Route>

                    <Route path='/sign-in'>
                        <Login/> {/*handleLogin={handleLogin}*/}
                    </Route>

                    <Route path='/'>
                        <NotFoundError/>
                    </Route>



                </Switch>
                </main>
            </CurrentUserContext.Provider>
            </>

    ))
}

export default App;
