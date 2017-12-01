import {
    UNSET_TOKENS
} from './../actions/token-actions';

import {
    LOGIN_SUCCESS
} from './../actions/login-actions'

const initialState = {};

export default function tokensReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, action.response.tokens);

        default:
            return state;
    }
}

