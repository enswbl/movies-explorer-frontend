import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
/*import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";*/
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function App() {

    const [currentUser, setCurrentUserState] = React.useState({
        name: '',
        email: '',
    });

    const [userData, setUserData] = React.useState({})


    const [loggedIn, setLoggedIn] = React.useState(true)

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


                <Header userData={userData}/>


                <main>

                    <Switch>


                        <Route path='/'>
                           <Promo/>
{/*                            <NavTab/>
                            <AboutProject/>
                            <Techs/>
                            <AboutMe/>
                            <Portfolio/>*/}
                        </Route>

                        <Route path='/movies'>
  {/*                          <SearchForm/>
                            <FilterCheckbox/>
                            <Preloader/>

                            <MoviesCardList/>
                            <MoviesCard/>*/}
                        </Route>

                        <Route path='/saved-movies'>
{/*                            <MoviesCardList/>
                            <MoviesCard/>*/}
                        </Route>

                        <Route path='/profile'>
                            <Profile/>
                        </Route>

                        <Route path='/sign-up'>
                            <Register/> {/*handleRegister={handleRegister}*/}
                        </Route>

                        <Route path='/sign-in'>
                            <Login/> {/*handleLogin={handleLogin}*/}
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
