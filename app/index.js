'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');
const controllers = require('./controllers');
const plugins = require('./plugins');

server.connection({
    host: '0.0.0.0',
    port: 80
});

server.state('user', {
    ttl: 86400,
    isSecure: false,
    isHttpOnly: false,
    encoding: 'base64json',
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
});

plugins.registerWith(server);

server.route([
    ...routes,
    ...controllers
]);

server.start();
