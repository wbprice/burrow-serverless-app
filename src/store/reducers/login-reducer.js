import update from 'immutability-helper';

import {
    SET_EMAIL_ADDRESS,
    SET_PASSWORD
} from './../actions/signup-actions';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from './../actions/login-actions';

const initialState = {
    emailAddress: {
        value: '',
        error: ''
    },
    password: {
        value: '',
        error: ''
    }
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case SET_EMAIL_ADDRESS:
            return update(state, {
                emailAddress: { $set: { value: action.emailAddress } }
            });

        case SET_PASSWORD:
            return update(state, {
                password: { $set: { value: action.password } }
            });

        default: 
            return state;
        }
    }
