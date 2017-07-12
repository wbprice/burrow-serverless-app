'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            reply.view('index');
        }
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
