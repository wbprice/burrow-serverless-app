'use strict';

const API_ROOT = '/api/v1/';
const path = require('path');

const controllers = [
    {
        method: 'POST',
        path: path.join(API_ROOT, 'signup'),
        handler: require('./signup')
    },
    {
        method: 'POST',
        path: path.join(API_ROOT, 'login'),
        handler: require('./login')
    },
    {
        method: 'GET',
        path: '/logout',
        handler: require('./logout')
    }
];

module.exports = controllers;
