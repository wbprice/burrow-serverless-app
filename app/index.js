'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 80
});

server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
        reply('hello world');
    }
});

server.start();
