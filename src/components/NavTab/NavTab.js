import React from 'react';

const NavTab = ({section1Ref , section2Ref , section3Ref}) => {

    const scrollTo = element => {
        element.scrollIntoView({behavior: "smooth"});
    }

    return ((
        <>
            <nav className="navtab">
                    <button onClick={_ => {scrollTo(section1Ref.current)}} className="navtab__link">О проекте</button>
                    <button onClick={_ => {scrollTo(section2Ref.current)}} className="navtab__link">Технологии</button>
                    <button onClick={_ => {scrollTo(section3Ref.current)}} className="navtab__link">Студент</button>
                </nav>
        </>
    ));
}
export default NavTab;