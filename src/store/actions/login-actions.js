import fetch from 'isomorphic-fetch';
import checkStatus from './../checkStatus';

const loginUrl = 'https://iqeruruex1.execute-api.us-east-1.amazonaws.com/dev/login';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';

export function setUsername(username) {
    return {
        type: SET_USERNAME,
        username
    };
}

export function setPassword(password) {
    return {
        type: SET_PASSWORD,
        password
    };
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function loginRequest() {
    return {
        type: LOGIN_REQUEST
    };
}

function loginSuccess(response) {
    return {
        type: LOGIN_SUCCESS,
        response
    };
}

function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    };
}

export function login(username, password) {
    return (dispatch) => {
        dispatch(loginRequest());
        fetch(loginUrl, {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(loginSuccess)
        .catch(loginFailure)
    };
}
