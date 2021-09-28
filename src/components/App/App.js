import React, {useRef} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import './App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import Movies from "../Movies/Movies";
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from "../Main/Main";

import * as MainApi from '../../utils/MainApi';

function App() {

    const location = useLocation();
    const currentPath = location.pathname;

    const [currentUser, setCurrentUserState] = React.useState({
        name: '',
        email: '',
    });

    const [userData, setUserData] = React.useState({})


    const [loggedIn, setLoggedIn] = React.useState()

    const [isOpen, setIsOpen] = React.useState({isOpen: false})

    const useSetIsOpen = () => {
        setIsOpen({isOpen: true})
    }

    const useSetIsClose = () => {
        setIsOpen({isOpen: false})
    }

    const history = useHistory();

    const tokenCheck = () => {
        const token = localStorage.getItem('token');
        if (token) {
            MainApi.getUserData(token)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        history.push('/movies');
                        // setUserData({email: res.user.email})
                    }
                })
                .catch((err) => {
                    console.log("Something is Wrong:", err);
                });
            return token;
        }
    }

    const [currentCards, setCurrentCardsState] = React.useState([]);
    
    React.useEffect(() => {
        const token = tokenCheck();

        moviesApi.getInitialMovies(token)
            .then((res) => {
            //     console.log('RES getInitialCards ===', res)
            // })
            
                setCurrentCardsState(res)
            })
            .catch((err) => {
                console.log("Something is Wrong:", err);
            });
        
        // api.getUserInfo(token)
        //     .then((res) => {
        //         setCurrentUserState(res.user)
        //     })
        //     .catch((err) => {
        //         console.log("Something is Wrong:", err);
        //     });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])

    React.useEffect(() => {
        tokenCheck()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])

    React.useEffect(() => {
        if (loggedIn) {
            history.push('/movies');
        }
    }, [history, loggedIn])

    const handleRegister = ({name, email, password}) => {
        return MainApi.register({name, email, password})
            .then((res) => {
                // console.log('RES REGISTER ===', res)
                if (res.user.email === email) {

                    // setStatus(true)
                    // setShowStatus({isOpen: true})

                    return res;
                }
            }).catch(() => {
                // setStatus(false)
                // setShowStatus({isOpen: true})
            })
    };

    const handleLogin = ({email, password}) => {
        return MainApi.authorize({email, password})
            .then((res) => {
                //  console.log('RES LOGIN ===', res)
                if (res.user.token) {

                    setLoggedIn(true)
                    localStorage.setItem('token', res.user.token)

                    setTimeout(() => {
                        history.push('/movies')
                    }, 2000)
                    return res;
                }
            })
            .catch(() => {
                console.log('Error!');
            })
    }

    return ((
        <>
            <CurrentUserContext.Provider value={currentUser}>
                {/* <Preloader/> */}

                <Header isOpen={isOpen.isOpen} useSetIsOpen={useSetIsOpen} useSetIsClose={useSetIsClose}/>

                <Switch>

                    <Route exact path='/'>
                        <Main
                        
                        />
                    </Route>

                    <Route exact path='/sign-up'>
                        <Register handleRegister={handleRegister}/>
                    </Route>

                    <Route path='/sign-in'>
                        <Login handleLogin={handleLogin}/>
                    </Route>

                    <ProtectedRoute  path="/profile"
                        component={Profile}
                        loggedIn={loggedIn}
                    />

                    <ProtectedRoute path='/movies'
                        component={Movies}
                        loggedIn={loggedIn}
                        currentCards={currentCards}
                        setMovieLike={MainApi.setMovieLike}
                        unsetMovieLike={MainApi.unsetMovieLike}
                    /> 

                    <ProtectedRoute  path='/saved-movies'
                        component={Movies}
                        loggedIn={loggedIn}
                        currentCards={currentCards}
                    />

                    <Route path="/">
                        <NotFoundError/>
                    </Route>

                </Switch>

                <Footer/>

            </CurrentUserContext.Provider>
        </>

    ))
}

export default App;
