import { authHeader } from '../helpers/authHelper';
import { addUserChoice, addPrices } from "../actions/actionsData";

export const userService = {
    login,
    logout,
    register,
    postChoice
};

function  postChoice(data){
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify({'content_id': data.id})
    }

    return dispatch => {
        return fetch('http://127.0.0.1:5000/api/basket/items/new_item', requestOptions)
            .then(res => {
                dispatch(addUserChoice(data));
                dispatch(addPrices(data.price))
            })
            .catch(error => console.log(error))
        };
}  

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://127.0.0.1:5000/api/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}


function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://127.0.0.1:5000/api/users/register/new_user`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}