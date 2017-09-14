'use strict';

const Hoek = require('hoek');
const path = require('path');

function registerWith(server) {
    server.register([
        require('vision'),
        require('inert'),
        {
            register: require('yar'),
            options: {
                cookieOptions: {
                    password: process.env.COOKIE_HASH,
                    isSecure: process.env.NODE_ENV === 'production'
                }
            }
        }
    ], (err) => {
        Hoek.assert(!err, err);

        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: path.join(__dirname, '..', 'views'),
            partialsPath: 'partials',
            path: 'templates'
        });

        server.route({
            method: 'GET',
            path: '/assets/{param*}',
            handler: {
                directory: {
                    path: path.join(__dirname, '..', 'assets'),
                    redirectToSlash: true,
                    index: false
                }
            }
        });
    });
}

module.exports.registerWith = registerWith;
