import Promo from "../Promo/Promo";

import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import NavTab from "../NavTab/NavTab";

import React, {useRef} from 'react';


const Main = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    return ((
        <>
            <main>
                <Promo/>
                <NavTab section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref}/>
                <AboutProject myRef={section1Ref}/>
                <Techs myRef={section2Ref}/>
                <AboutMe myRef={section3Ref}/>
                <Portfolio/>
            </main>


        </>

    ));
}

export default (Main);