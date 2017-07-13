'use strict';

const Wreck = require('wreck');
const Boom = require('boom');
const bcrypt = require('bcryptjs');

const API_BASE = process.env.API_BASE;

function login(request, reply) {
    const {
        emailAddress,
        password
    } = request.payload;

    Wreck.get(`${API_BASE}/users?emailAddress=${emailAddress}`, (error, response, payload) => {
        if (error) {
            return reply(Boom.badRequest(error.message));
        }
        return Promise.all(JSON.parse(payload).map((user) => {
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
                    return reply(Boom.badRequest('User/pass combination invalid'));
                }

                const userInfo = {
                    emailAddress: account.emailAddress,
                    name: account.name,
                    id: account.id
                };

                request.yar.set('user', userInfo);
                return reply.redirect('/');
            })
            .catch((error) => {
                return reply(Boom.badRequest(error.message));
            });
    });
}

module.exports = login;
