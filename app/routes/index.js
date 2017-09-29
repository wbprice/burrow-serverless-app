'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: require('./home')
    }, {
        method: 'GET',
        path: '/login',
        handler: require('./login')
    }, {
        method: 'GET',
        path: '/signup',
        handler: require('./signup')
    }, {
        method: 'GET',
        path: '/dashboard',
        handler: require('./dashboard')
    }, {
        method: 'GET',
        path: '/confirm-account',
        handler: require('./confirm-account')
    }
];

module.exports = routes;
