import update from 'immutability-helper';

import {
    SET_USERNAME,
    SET_EMAIL_ADDRESS,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD
} from './../actions/signup-actions';

const initialState = {
    username: {
        value: '',
        error: ''
    },
    emailAddress: {
        value: '',
        error: ''
    },
    password: {
        value: '',
        error: ''
    },
    confirmPassword: {
        value: '',
        error: ''
    }
};

export default function signupReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return update(state, {
                username: { $set: { value: action.username } }
            });

        case SET_EMAIL_ADDRESS:
            return update(state, {
                emailAddress: { $set: { value: action.emailAddress } }
            });
                    
        case SET_PASSWORD:
            return update(state, {
                password: { $set: { value: action.password } }
            });

        case SET_CONFIRM_PASSWORD:
            return update(state, {
                confirmPassword: { $set: { value: action.confirmPassword } }
            });

        default:
            return state;
    }
}
