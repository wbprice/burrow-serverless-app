'use strict';

const Wreck = require('wreck');

const API_BASE = process.env.REMOTE_API_BASE || '';

function createRemote(ownedBy, temperature, name, callback) {

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        payload: JSON.stringify({
            ownedBy,
            temperature,
            name
        })
    };

    return Wreck.post(`${API_BASE}/remotes`, options, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload);
    });
}

function fetchRemotes(id, callback) {

    const options = {
        json: true
    };

    return Wreck.get(`${API_BASE}/remotes?ownedBy={id}`, options, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload);
    });
}

function updateRemote(data, callback) {

    const {
        id,
        temperature,
        name
    } = data;

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        payload: JSON.stringify({
            temperature,
            name
        })
    };

    return Wreck.put(`${API_BASE}/remotes/${id}`, options, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload);
    });
}

module.exports = {
    createRemote,
    fetchRemotes,
    updateRemote
};
