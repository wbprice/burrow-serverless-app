'use strict';

const Wreck = require('wreck');

const API_BASE = process.env.REMOTE_API_BASE || '';

function create(idToken, temperature, name, callback) {

    const options = {
        json: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`
        },
        payload: JSON.stringify({
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

function list(idToken, callback) {
    const options = {
        json: true,
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    };

    return Wreck.get(`${API_BASE}/remotes`, options, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload);
    });
}

function update(idToken, data, callback) {

    const {
        id,
        temperature,
        name
    } = data;

    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`
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

function destroy(idToken, id, callback) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`
        },
        json: true
    };

    return Wreck.delete(`${API_BASE}/remotes/${id}`, options, (err, res, payload) => {
        if (err) {
            return callback(err);
        }
        return callback(null, payload);
    });
}

module.exports = {
    create,
    list,
    update,
    destroy
};
