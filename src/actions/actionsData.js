import { authHeader } from "../helpers/authHelper";

export function fetchHotels(price) {
    return dispatch => {
        return  fetch(`http://127.0.0.1:5000/api/content/hotel/${price}`)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

export function fetchRestaraunts(price) {
    return dispatch => {
        return  fetch(`http://127.0.0.1:5000/api/content/restaurant/${price}`)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

export function fetchEntertainments(price) {
    return dispatch => {
        return  fetch(`http://127.0.0.1:5000/api/content/entertainment/${price}`)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

//Get all items in user's basket
export function fetchBasket() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return dispatch => {
        return  fetch("http://127.0.0.1:5000/api/basket/items/all", requestOptions)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchUserChoice(json.items));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}


//Delete item from table basket in DB
export function deleteChoice(data){

    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    }
    
    return dispatch => {
        fetch(`http://127.0.0.1:5000/api/basket/items/${data.id}`, requestOptions)
        .then(() => {
            dispatch(deleteUserChoice(data.id));
            dispatch(minusPrices(data.price));

        })
        .catch(error => {
            console.log(error);
        })
    };
}

export const fetchDataSuccess = posts => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: { posts }
});

export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: { error }

});

export const addUserChoice = choice => ({
    type: 'ADD_USER_CHOICE',
    payload: { choice }
});

export const fetchUserChoice = choice => ({
    type: 'FETCH_USER_CHOICE',
    payload: { choice }
});

export const deleteUserChoice = id => ({
    type: 'DELETE_USER_CHOICE',
    payload: { id }
});

export const addPrices = price => ({
    type: 'ADD_BASKET_PRICE',
    payload: { price }
});

export const minusPrices = price => ({
    type: 'MINUS_BASKET_PRICE',
    payload: { price }
});

export const changeBudget = budget => ({
    type: 'SHOW_BUDGET',
    payload: { budget }
});
