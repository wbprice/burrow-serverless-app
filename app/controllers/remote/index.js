'use strict';

const Wreck = require('wreck');
const Boom = require('boom');

const API_BASE = process.env.REMOTE_API_BASE || '';

function createRemote(request, reply) {
    const { id } = request.yar.get('user');
    const { temperature, location } = request.payload;

    console.log(id, temperature, location)

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        payload: JSON.stringify({
            owner: id,
            temperature,
            location
        })
    };

    console.log(`${API_BASE}/remotes`);

    Wreck.post(`${API_BASE}/remotes`, options, (err, res, payload) => {
        if (err) {
            return reply(Boom.badRequest(err.message));
        }
        console.log(payload.toString());
        reply(payload);
    });
}

module.exports = {
    etchRemotes
}