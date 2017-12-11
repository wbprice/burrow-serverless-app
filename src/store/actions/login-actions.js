import fetch from 'isomorphic-fetch';
import checkStatus from './../checkStatus';
import { push } from 'react-router-redux'

import { getUserInfo } from './../actions/user-actions';
import { setTimedToastAlert } from './../actions/toast-actions';
import getErrorMessage from './../utils/getErrorMessage';

const loginUrl = 'https://mnujb6tvdc.execute-api.us-east-1.amazonaws.com/dev/login';
const logoutUrl = 'https://mnujb6tvdc.execute-api.us-east-1.amazonaws.com/dev/logout';

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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: emailAddress,
                password
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            const accessToken = response.accessToken.jwtToken;
            dispatch(loginSuccess(response))
            dispatch(push('/dashboard'))
            dispatch(getUserInfo(accessToken))
        })
        .catch(error => {
            const {
                level,
                message
            } = getErrorMessage(JSON.parse(error.message));
            dispatch(loginFailure(error));
            dispatch(setTimedToastAlert(message, level));
        })
    };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function logoutRequest() {
    return {
        type: LOGOUT_REQUEST
    }
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    }
}

function logoutFailure() {
    return {
        type: LOGOUT_FAILURE
    }
}

export function logout(token) {
    return dispatch => {
        dispatch(logoutRequest());
        return fetch(logoutUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(logoutSuccess());
            dispatch(push('/'))
        })
        .catch(error => {
            dispatch(logoutFailure());
        })
    }
}