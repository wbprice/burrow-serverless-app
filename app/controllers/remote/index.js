'use strict';

const RemoteService = require('./../../services/remote');

function createRemote(request, reply) {
    const { id } = request.yar.get('user');
    const { temperature, name } = request.payload;

    return RemoteService.createRemote(id, temperature, name, (err, payload) => {
        // If error
        if (err) {
            return reply(err);
        }
        // Else, refresh the page.
        return reply.redirect('/dashboard');
    });
}

function updateRemote(request, reply) {
    const { id } = request.params;
    const {
        name,
        temperature
    } = request.payload;

    const data = {
        id,
        name,
        temperature
    };

    return RemoteService.updateRemote(data, (err, payload) => {
        if (err) {
            return reply('oh no');
        }
        return reply.redirect('/dashboard');
    });
}

module.exports = {
    createRemote,
    updateRemote
};
