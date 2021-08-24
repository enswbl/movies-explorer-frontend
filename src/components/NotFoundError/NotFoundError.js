import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NotFoundError = () => {

    return ((
        <>
            <div className="error">
                <h1 className='error__title'>404</h1>
                <p className='error__message'>Страница не найдена</p>
                <Link to="/sign-up" className="register__link error__link">Назад</Link>
            </div>
        </>

    ));
}

export default withRouter(NotFoundError);
