'use strict';

const Wreck = require('wreck');
const Boom = require('boom');
const {
    USER_API_BASE, 
    FB_APP_ID,
    FB_APP_SECRET,
    SOCIAL_LOGIN_REDIRECT
} = process.env;

function login(emailAddress, password, callback) {

    const options = {
        json: true,
        payload: JSON.stringify({
            username: emailAddress,
            password
        })
    };

    return Wreck.post(`${USER_API_BASE}/login`, options, (err, response, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload);
    });
}

function signup(data, callback) {
    const options = {
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        payload: JSON.stringify({
            name: data.name,
            emailAddress: data.emailAddress,
            password: data.password
        })
    };

    return Wreck.post(`${USER_API_BASE}/signup`, options, (err, response, payload) => {
        if (err) {
            console.log('error: ', err);
            return callback(err);
        }
        return callback(null, payload);
    });
}

function getAccessToken(code, callback) {
    const options = {
        json: true
    }

    const url = 'https://graph.facebook.com/v2.10/oauth/access_token?' +
                `client_id=${FB_APP_ID}` +
                `&redirect_uri=${SOCIAL_LOGIN_REDIRECT}` +
                `&client_secret=${FB_APP_SECRET}` +
                `&code=${code}`;
    
    return Wreck.get(url, options, (err, response, payload) => {
        if (err) {
            return callback(err)
        }
        return callback(null, payload);
    });
}

function socialLogin(code, callback) {
    getAccessToken(code, (err, accessCode) => {
        if (err) {
            // handle error
            return callback(err)
        }
        // handle success
        return callback(null, accessCode)
    });
}

function confirmAccount(username, confirmationCode, callback) {
    const options = {
        json: true,
        payload: JSON.stringify({
            confirmationCode,
            username
        })
    };

    return Wreck.post(`${USER_API_BASE}/confirm-account`, options, (err, response, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload)
    });
}

module.exports = {
    login,
    socialLogin,
    signup,
    confirmAccount
};
