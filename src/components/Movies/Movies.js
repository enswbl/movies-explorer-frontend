import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import React from 'react';

const Movies = ({currentCards}) => {

    return ((
        <>

<main>
<SearchForm/>
                            <FilterCheckbox/>
                            <MoviesCardList currentCards={currentCards}/>
</main>
                            
        </>

    ));
}

export default (Movies);





                           