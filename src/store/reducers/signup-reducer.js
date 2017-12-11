// import update from 'immutability-helper';

import {
    SET_EMAIL_ADDRESS,
    SET_USERNAME,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD
} from './../actions/signup-actions';

const initialState = {
    name: {},
    username: {},
    password: {},
    confirmPassword: {}
};

export default function signupReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
        case SET_EMAIL_ADDRESS:
        case SET_PASSWORD:
        case SET_CONFIRM_PASSWORD:
            return state;

        default:
            return state;
    }
}