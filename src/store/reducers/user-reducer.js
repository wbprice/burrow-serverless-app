import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from './../actions/login-actions'

import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE
} from './../actions/user-actions'

const initialState = {
    tokens: {}
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                tokens: action.response
            })

        case LOGOUT_SUCCESS:
            return initialState;

        case GET_USER_INFO_REQUEST:
        case GET_USER_INFO_FAILURE:
        case GET_USER_INFO_SUCCESS:
            return Object.assign({}, state, action.response)

        default:
            return state;
    }
}

