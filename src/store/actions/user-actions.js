import checkStatus from './../checkStatus'
import fetch from 'isomorphic-fetch'

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

const userInfoUrl = 'https://69w7wrgi7c.execute-api.us-east-1.amazonaws.com/dev/user'

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(response) {
    return {
        type: GET_USER_INFO_SUCCESS,
        response
    }
}

function getUserInfoFailure(error) {
    return {
        type: GET_USER_INFO_FAILURE,
        error
    }
}

export function getUserInfo(token) {
    return (dispatch) => {
        dispatch(getUserInfoRequest())
        return fetch(userInfoUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(getUserInfoSuccess(response))
        })
        .catch(error => {
            dispatch(getUserInfoFailure(error));
        })
    }
}