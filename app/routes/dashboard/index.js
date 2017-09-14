'use strict';

const RemoteService = require('./../../services/remotes');

function handler(request, reply) {
    const user = request.yar.get('user');
    return RemoteService.fetchRemotes(user.id, (err, payload) => {
        if (err) {
            return reply('oh shoot');
        }

        reply.view('dashboard', {
            user,
            remotes: JSON.parse(payload)
        });
    })
}

module.exports = handler;
