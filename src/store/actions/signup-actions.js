import fetch from 'isomorphic-fetch'; 
import checkStatus from './../checkStatus'; 

import {
    signup as signupUrl,
} from './../utils/loginUrls';

import getErrorMessage from '../utils/getErrorMessage';
import { setTimedToastAlert } from './toast-actions';

const confirmAccountUrl = require('./../utils/loginUrls')['confirm-account']

export const SET_USERNAME = 'SET_USERNAME';
export const SET_EMAIL_ADDRESS = 'SET_EMAIL_ADDRESS';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_PASSWORD = 'SET_PASSWORD';

export function setUsername(username) {
    return {
        type: SET_USERNAME,
        username
    }
}

export function setEmailAddress(emailAddress) {
    return {
        type: SET_EMAIL_ADDRESS,
        emailAddress
    };
}

export function setPassword(password) {
    return {
        type: SET_PASSWORD,
        password
    };
}

export function setConfirmPassword(confirmPassword) {
    return {
        type: SET_CONFIRM_PASSWORD,
        confirmPassword
    };
}

const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function signupRequest() {
    return {
        type: SIGNUP_REQUEST
    };
}

function signupSuccess(response) {
    return {
        type: SIGNUP_SUCCESS,
        response
    };
}

function signupFailure(error) {
    return {
        type: SIGNUP_FAILURE,
        error
    };
}

export function signup(username, emailAddress, password, confirmPassword) {
    return (dispatch) => {
        dispatch(signupRequest());
        if (password !== confirmPassword) {
            return dispatch(signupFailure('Passwords didn\'t match'));
        }
        fetch(signupUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                emailAddress,
                password
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(signupSuccess());
        })
        .catch(error => {
            const {
                level,
                message
            } = getErrorMessage(JSON.parse(error.message));
            dispatch(signupFailure(error))
            dispatch(setTimedToastAlert(message, level));
        })
    }
}

export const SET_CONFIRMATION_CODE = 'SET_CONFIRMATION_CODE';
export const CONFIRM_ACCOUNT_REQUEST = 'CONFIRM_ACCOUNT_REQUEST';
export const CONFIRM_ACCOUNT_SUCCESS = 'CONFIRM_ACCOUNT_SUCCESS';
export const CONFIRM_ACCOUNT_FAILURE = 'CONFIRM_ACCOUNT_FAILURE';

export function setConfirmationCode(confirmationCode) {
    return {
        type: SET_CONFIRMATION_CODE,
        confirmationCode
    }
}

export function confirmAccountRequest() {
    return {
        type: CONFIRM_ACCOUNT_REQUEST
    }
}

export function confirmAccountSuccess(response) {
    return {
        type: CONFIRM_ACCOUNT_SUCCESS
    }
}

export function confirmAccountFailure(error) {
    return {
        type: CONFIRM_ACCOUNT_FAILURE,
        error
    }
}

export function confirmAccount(emailAddress, code) {
    return dispatch => {
        return fetch(confirmAccountUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: emailAddress,
                confirmationCode: code
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(confirmAccountSuccess());
        })
        .catch(error => {
            const {
                level,
                message
            } = getErrorMessage(JSON.parse(error.message));
            dispatch(confirmAccountFailure(error));
            dispatch(setTimedToastAlert(message, level));
        });
    }
}
