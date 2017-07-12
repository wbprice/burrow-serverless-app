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
    }
];

module.exports = routes;
