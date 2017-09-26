'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: require('./home')
    },
    {
        method: 'GET',
        path: '/login',
        handler: require('./login')
    },
    {
        method: 'GET',
        path: '/social-login',
        handler: require('./social-login')
    },
    {
        method: 'GET',
        path: '/signup',
        handler: require('./signup')
    },
    {
        method: 'GET',
        path: '/dashboard',
        handler: require('./dashboard')
    }
];

module.exports = routes;
