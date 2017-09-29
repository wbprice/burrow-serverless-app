'use strict';

const path = require('path');

const { 
    API_ROOT,
    SOCIAL_LOGIN_REDIRECT
} = process.env;

const {
    signup,
    confirmAccount,
    socialLogin,
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
        path: path.join(API_ROOT, 'confirm-account'),
        handler: confirmAccount
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
    },
    {
        method: 'GET',
        path: path.join(API_ROOT, 'social-login'),
        handler: socialLogin
    },
];

module.exports = controllers;
