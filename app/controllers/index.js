'use strict';

const API_ROOT = '/api/v1/';
const path = require('path');

const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const {
    createRemote
} = require('./remotes');

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
    }
];

module.exports = controllers;
