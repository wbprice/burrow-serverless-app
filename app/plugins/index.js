'use strict';

const Hoek = require('hoek');
const path = require('path');

function registerWith(server) {
    server.register([
        require('vision')
    ], (err) => {
        Hoek.assert(!err, err);

        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: path.join(__dirname, '..', 'views'),
            helpersPath: 'helpers',
            partialsPath: 'partials',
            path: 'templates'
        });
    });
}

module.exports.registerWith = registerWith;
