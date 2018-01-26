import checkStatus from './../checkStatus'
import fetch from 'isomorphic-fetch'
import { remotes as remotesUrl } from './../utils/remoteUrls';
import { setTimedToastAlert } from './toast-actions';
import { push } from 'react-router-redux';

export const FETCH_REMOTES_REQUEST = 'FETCH_REMOTES_REQUEST';
export const FETCH_REMOTES_SUCCESS = 'FETCH_REMOTES_SUCCESS';
export const FETCH_REMOTES_FAILURE = 'FETCH_REMOTES_FAILURE';

function fetchRemotesRequest() {
    return {
        type: FETCH_REMOTES_REQUEST
    }
}

function fetchRemotesSuccess(response) {
    return {
        type: FETCH_REMOTES_SUCCESS,
        response
    }
}

function fetchRemotesFailure(error) {
    return {
        type: FETCH_REMOTES_FAILURE,
        error
    }
}

export function fetchRemotes(token) {
    return (dispatch) => {
        dispatch(fetchRemotesRequest())
        return fetch(remotesUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchRemotesSuccess(response))
        })
        .catch(error => {
            dispatch(fetchRemotesFailure(error));
            dispatch(push('/login'));
            dispatch(setTimedToastAlert('You\'ll need to login before managing thermostats', 'warning'));
        })
    }
}

export const SET_REMOTE_TEMPERATURE = 'SET_REMOTE_TEMPERATURE';
export const SET_REMOTE_NAME = 'SET_REMOTE_NAME'

export function setRemoteName(id, name) {
    return {
        type: SET_REMOTE_NAME,
        id,
        name
    }
} 

export function setRemoteTemperature(id, temperature) {
    return {
        type: SET_REMOTE_TEMPERATURE,
        id,
        temperature
    }
}

export const CREATE_REMOTE_REQUEST = 'CREATE_REMOTE_REQUEST';
export const CREATE_REMOTE_SUCCESS = 'CREATE_REMOTE_SUCCESS';
export const CREATE_REMOTE_FAILURE = 'CREATE_REMOTE_FAILURE';

function createRemoteRequest(request) {
    return {
        type: CREATE_REMOTE_REQUEST,
        request
    }
}

function createRemoteSuccess(response) {
    return {
        type: CREATE_REMOTE_SUCCESS,
        response
    }
}

function createRemoteFailure(error) {
    return {
        type: CREATE_REMOTE_FAILURE,
        error
    }
}

export function createRemote(token, temperature, name) {
    return (dispatch) => {
        dispatch(createRemoteRequest({temperature, name}))
        return fetch(remotesUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                temperature,
                name
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(createRemoteSuccess(response))
        })
        .catch(error => {
            dispatch(createRemoteFailure(error))
        })
    }
}

export const UPDATE_REMOTE_REQUEST = 'UPDATE_REMOTE_REQUEST';
export const UPDATE_REMOTE_SUCCESS = 'UPDATE_REMOTE_SUCCESS';
export const UPDATE_REMOTE_FAILURE = 'UPDATE_REMOTE_FAILURE';

function updateRemoteRequest() {
    return {
        type: UPDATE_REMOTE_REQUEST
    }
}

function updateRemoteSuccess(response) {
    return {
        type: UPDATE_REMOTE_SUCCESS,
        response
    }
}

function updateRemoteFailure(error) {
    return {
        type: UPDATE_REMOTE_FAILURE,
        error
    }
}

export function updateRemote(token, id, temperature, name) {
    return dispatch => {
        dispatch(updateRemoteRequest())
        return fetch(`${remotesUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                temperature,
                name
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(updateRemoteSuccess(response))
        })
        .catch(error => {
            dispatch(updateRemoteFailure(error))
        })
    }
}