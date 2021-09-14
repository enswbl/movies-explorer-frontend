import React, {useRef} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import SearchForm from "../SearchForm/SearchForm";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import NavTab from "../NavTab/NavTab";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
/*
import Preloader from "../Preloader/Preloader";;*/
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function App() {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const [currentUser, setCurrentUserState] = React.useState({
        name: '',
        email: '',
    });

    const [userData, setUserData] = React.useState({})


    const [loggedIn, setLoggedIn] = React.useState(true)

    const [isOpen, setIsOpen] = React.useState({isOpen: false})

    const useSetIsOpen = () => {
        setIsOpen({isOpen: true})
    }

    const useSetIsClose = () => {
        setIsOpen({isOpen: false})
    }

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
                {/* <Preloader/> */}

                <Header isOpen={isOpen.isOpen} useSetIsOpen={useSetIsOpen} useSetIsClose={useSetIsClose}/>

                <main>

                    <Switch>

                        <Route
                            exact
                            path='/'>
                            <Promo/>
                            <NavTab section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref}/>
                            <AboutProject myRef={section1Ref}/>
                            <Techs myRef={section2Ref}/>
                            <AboutMe myRef={section3Ref}/>
                            <Portfolio/>
                        </Route>

                        <Route path='/movies'>
                            <SearchForm/>
                            <FilterCheckbox/>
                            <MoviesCardList/>
                        </Route>

                        <Route path='/saved-movies'>
                            <SearchForm/>
                            <FilterCheckbox/>
                            <MoviesCardList/>
                        </Route>

                        <Route path='/profile'>
                            <Profile/>
                        </Route>

                        <Route path='/sign-up'>
                            <Register/>
                        </Route>

                        <Route path='/sign-in'>
                            <Login/>
                        </Route>

                        <Route path='/404'>
                            <NotFoundError/>
                        </Route>

                    </Switch>

                </main>

                {loggedIn && <Footer/>}

            </CurrentUserContext.Provider>
        </>

    ))
}

export default App;
