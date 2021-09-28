export const BASE_URL = 'http://localhost:3001';

const checkResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export const register = ({name, email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password}),
        credentials: 'include',
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}),
        credentials: 'include',
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
};

export const getUserData = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
};

export const setUserInfo = ({name, email}, jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
        credentials: 'include',
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
}

export const setMovieLike = (item) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(item),
        credentials: 'include',
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
};

export const unsetMovieLike = (item) => {
    return fetch(`${BASE_URL}/movies/${item}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })
        .then((res) => checkResponse(res))
        .then((res) => {
            return res;
        })
};






