class MoviesApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    _checkErrors(result) {
        if (!result.ok) {
            return Promise.reject(`Error: ${result.status}`);
        }
        return result.json();
    }


    getInitialMovies(jwt) {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // authorization: `Bearer ${jwt}`,
            },
            // credentials: 'include',
        }).then((result) => this._checkErrors(result));
    }

    setLike(item, jwt) {
        return fetch(`${this._baseUrl}/cards/${item}/likes`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${jwt}`,
            },
            credentials: 'include',
        }).then((result) => this._checkErrors(result));
    }



}

const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co",
});

export default moviesApi;