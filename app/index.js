'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');

server.connection({
    host: '0.0.0.0',
    port: 80
});

server.route(routes);

server.start();
