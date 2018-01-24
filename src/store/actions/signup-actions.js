import fetch from 'isomorphic-fetch'; 
import checkStatus from './../checkStatus'; 
import { push } from 'react-router-redux';

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

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function signupRequest() {
    return {
        type: SIGNUP_REQUEST
    };
}

export function signupSuccess(response) {
    return {
        type: SIGNUP_SUCCESS,
        response
    };
}

export function signupFailure(error) {
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
            dispatch(setTimedToastAlert(`We sent a confirmation email to ${emailAddress}.  Go get the confirmation code and come back!`, 'success'));
            dispatch(push('/confirm'));
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
            dispatch(push('/login'));
            dispatch(setTimedToastAlert('Account confirmed.  You can log in now.', 'success'))
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
