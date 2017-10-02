'use strict';

const RemoteService = require('./../../services/remote');

function handler(request, reply) {
    const user = request.yar.get('user');

    return reply.view('dashboard', {
        user,
        noRemotes: true
    });
}

module.exports = handler;
