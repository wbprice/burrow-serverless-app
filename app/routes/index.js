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
        path: '/signup',
        handler: require('./signup')
    }
];

module.exports = routes;
