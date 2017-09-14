'use strict';

const Wreck = require('wreck');
const Boom = require('boom');

const API_BASE = process.env.API_BASE;

function createRemote(request, reply) {
    const { owner } = request.params;
    const { temperature, location } = request.params.payload;

    Wreck.post(`${API_BASE}/remotes`, {
        owner,
        temperature,
        location
    }, (err, res, payload) => {
        if (err) {
            return reply(Boom.badRequest(error.message));
        }
        reply(payload);
    });
}

module.exports = {
    createRemote
}