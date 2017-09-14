'use strict';

const Wreck = require('wreck');
const Boom = require('boom');

const API_BASE = process.env.REMOTE_API_BASE || '';

function createRemote(owner, temperature, location, callback) {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        payload: JSON.stringify({
            owner,
            temperature,
            location
        })
    };

    Wreck.post(`${API_BASE}/remotes`, options, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload.toString());        
    });
}

function fetchRemotes(id, callback) {
    Wreck.get(`${API_BASE}/remotes`, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload.toString());
    });
}

module.exports = {
    createRemote,
    fetchRemotes
}