import update from 'immutability-helper'

import {
    SET_REMOTE_NAME,
    SET_REMOTE_TEMPERATURE,
    CREATE_REMOTE_REQUEST,
    CREATE_REMOTE_SUCCESS,
    FETCH_REMOTES_FAILURE,
    FETCH_REMOTES_SUCCESS,
    UPDATE_REMOTE_SUCCESS
} from './../actions/dashboard-actions';

import {
    LOGOUT_SUCCESS
} from './../actions/login-actions';

const initialState = {
    remotes: [],
    debug: {
        temperature: {
            value: '',
            error: ''
        },
        name: {
            value: '',
            error: ''
        }
    }
}

function mungeRemote(remote) {
    return Object.assign({}, remote, {
        name: {
            value: remote.name,
            error: ''
        },
        temperature: {
            value: remote.temperature
        }
    })
}

export default function dashboardReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_REMOTES_SUCCESS:
            return update(state, {
                remotes: { $set: action.response.map(mungeRemote) }
            })

        case FETCH_REMOTES_FAILURE:
            return state;

        case CREATE_REMOTE_REQUEST:
            return update(state, {
                remotes: { $push: [
                    Object.assign(
                        {},
                        {id: 'fakeid'},
                        mungeRemote(action.request)
                    )
                ]}
            });

        case CREATE_REMOTE_SUCCESS:
            return state;

        case SET_REMOTE_NAME:
            if (!action.id) {
                return update(state, {
                    debug: { name: {$set: {value: action.name}}}
                })
            }
            return update(state, {
                remotes: {
                    [state.remotes.findIndex(r => r.id === action.id)]: {
                        name: { $set: { value: action.name } }
                    }
                }
            })

        case SET_REMOTE_TEMPERATURE:
            if (!action.id) {
                return update(state, {
                    debug: { temperature: {$set: {value: action.temperature}}}
                })
            }
            return update(state, {
                remotes: {
                    [state.remotes.findIndex(r => r.id === action.id)]: {
                        temperature: { $set: { value: action.temperature } }
                    }
                }
            })

        case UPDATE_REMOTE_SUCCESS:
            return update(state, {
                [state.remotes.findIndex(r => r.id === action.id)]: {
                    $set: mungeRemote(action.response)
                }
            })

        case LOGOUT_SUCCESS:
            return initialState;

        default:
            return state;
    }
}