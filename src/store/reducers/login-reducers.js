import update from 'immutability-helper';

import {
    SET_USERNAME,
    SET_PASSWORD,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from './../actions/login-actions';

const initialState = {
    username: {
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
        case SET_USERNAME:
            return update(state, {
                username: { $set: { value: action.username } }
            });

        case SET_PASSWORD:
            return update(state, {
                password: { $set: { value: action.password } }
            });

        default: 
            return state;
        }
    }
