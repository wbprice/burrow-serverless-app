'use strict';

const RemoteService = require('./../../services/remote');

function handler(request, reply) {
    const user = request.yar.get('user');
    return RemoteService.fetchRemotes(user.id, (err, payload) => {
        if (err) {
            return reply(err);
        }

        return reply.view('dashboard', {
            user,
            remotes: payload
        });
    });
}

module.exports = handler;
