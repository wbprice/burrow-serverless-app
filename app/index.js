'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');
const plugins = require('./plugins');

server.connection({
    host: '0.0.0.0',
    port: 80
});

plugins.registerWith(server);

server.route(routes);

server.start();
