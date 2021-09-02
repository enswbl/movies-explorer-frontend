import React from 'react';

const SearchForm = () => {

    return ((
        <>
            <div className='search-form'>

                <input
               /*     onChange={handleChange}
                       value={userData.name}*/
                       id="search-form"
                       name="search-form"
                       className="search-form__input"
                       type='text'
                       minLength='2'
                       maxLength='40'
                       placeholder="Фильм"
                    /*autoComplete='off'*/
                       required/>



                <button className='search-form__button'>Найти</button>

            </div>

        </>

    ));
}

export default (SearchForm);
