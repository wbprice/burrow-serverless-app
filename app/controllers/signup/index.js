'use strict';

const Wreck = require('wreck');
const Boom = require('boom');
const bcrypt = require('bcryptjs');

const API_BASE = process.env.API_BASE || '';

function signup(request, reply) {
    const data = request.payload;

    // Confirm that passwords match.
    if (data.password !== data.confirmPassword) {
        return reply(Boom.unauthorized('Entered passwords didn\'t match'));
    }

    bcrypt.hash(data.password, 10, (err, hash) => {
        if (err) {
            return reply(Boom.badRequest(err.message));
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

        Wreck.post(`${API_BASE}/users`, options, (err, response, payload) => {
            if (err) {
                return reply(Boom.badRequest(err.message));
            }
            return reply.redirect('/');
        });
    });
}

module.exports = signup;
