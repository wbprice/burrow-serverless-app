'use strict';

const Wreck = require('wreck');
const Boom = require('boom');
const bcrypt = require('bcryptjs');
const API_BASE = process.env.USER_API_BASE;

function login(emailAddress, password, callback) {

    const options = {
        json: true
    };

    return Wreck.get(`${API_BASE}/users?emailAddress=${emailAddress}`, options, (error, response, payload) => {
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
    return bcrypt.hash(data.password, 10, (err, hash) => {
        if (err) {
            return callback(new Error('Error hashing password'));
        }

        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            payload: JSON.stringify({
                name: data.name,
                emailAddress: data.emailAddress,
                password: hash
            })
        };

        return Wreck.post(`${API_BASE}/users`, options, (err, response, payload) => {
            if (err) {
                return callback(err);
            }
            return callback(null, payload);
        });
    });
}

module.exports = {
    login,
    signup
};
