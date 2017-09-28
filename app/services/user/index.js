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
        json: true
    };

    return Wreck.get(`${USER_API_BASE}/users?emailAddress=${emailAddress}`, options, (error, response, payload) => {
        if (error) {
            return callback(error);
        }

        return Promise.all(payload.map((user) => {
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, user.password, (err, match) => {
                    if (err) {
                        reject(err);
                    }
                    user.match = match;
                    resolve(user);
                });
            });
        }))
            .then((accounts) => {
                const account = accounts.find((account) => account.match);

                if (!account) {
                    return callback(Boom.badRequest('User/pass combination invalid'));
                }

                const userInfo = {
                    emailAddress: account.emailAddress,
                    name: account.name,
                    id: account.id
                };

                return callback(null, userInfo);
            })
            .catch((error) => {
                return callback(Boom.badRequest(error.message));
            });
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
        console.log('success: ', payload);
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

module.exports = {
    login,
    socialLogin,
    signup
};
