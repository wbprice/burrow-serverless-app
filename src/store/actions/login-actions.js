import fetch from 'isomorphic-fetch';
import checkStatus from './../checkStatus';
import { push } from 'react-router-redux'

const loginUrl = 'https://iqeruruex1.execute-api.us-east-1.amazonaws.com/dev/login';

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

export function login(emailAddress, password) {
    return (dispatch) => {
        dispatch(loginRequest());
        fetch(loginUrl, {
            method: 'post',
            body: JSON.stringify({
                username: emailAddress,
                password
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(loginSuccess(response));
            dispatch(push('/dashboard'));
        })
        .catch(error => {
            dispatch(loginFailure(JSON.parse(error.message)));
        })
    };
}
