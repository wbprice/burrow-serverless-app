'use strict';

const Wreck = require('wreck');
const Boom = require('boom');

const RemoteService = require('./../../services/remotes');

const API_BASE = process.env.REMOTE_API_BASE || '';

function createRemote(request, reply) {
    const { id } = request.yar.get('user');
    const { temperature, location } = request.payload;

    return RemoteService.createRemote(id, temperature, location, (err, payload) => {
        // If error
        if (err) {
            reply('ah shit');
        }
        // Else, refresh the page.
        reply.redirect('/dashboard');
    });
}

function fetchRemotes(request, reply) {
    const { id } = request.yar.get('user');

    return RemoteService.fetchRemotes(id, (err, payload) => {
        if (err) {
            reply('ah shit');
        }
        // Else, refresh the page.
        reply();
    })
}

module.exports = {
    createRemote,
    fetchRemotes
}