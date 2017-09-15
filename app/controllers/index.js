'use strict';

const API_ROOT = '/api/v1/';
const path = require('path');

const {
    signup,
    login,
    logout
} = require('./user');

const {
    createRemote,
    updateRemote
} = require('./remote');

const controllers = [
    {
        method: 'POST',
        path: path.join(API_ROOT, 'signup'),
        handler: signup
    },
    {
        method: 'POST',
        path: path.join(API_ROOT, 'login'),
        handler: login
    },
    {
        method: 'GET',
        path: '/logout',
        handler: logout
    },
    {
        method: 'POST',
        path: path.join(API_ROOT, 'remote'),
        handler: createRemote
    },
    {
        method: 'POST',
        path: path.join(API_ROOT, 'remote/{id}'),
        handler: updateRemote
    }
];

module.exports = controllers;
