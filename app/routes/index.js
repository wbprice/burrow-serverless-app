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
        handler(request, reply) {
            reply('login page');
        }
    }
];

module.exports = routes;
