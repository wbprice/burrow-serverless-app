'use strict';

const RemoteService = require('./../../services/remote');

function createRemote(request, reply) {
    const user = request.yar.get('user');
    const idToken = user && user.tokens.idToken.jwtToken;
    const { temperature, name } = request.payload;

    return RemoteService.create(idToken, temperature, name, (err, payload) => {
        // If error
        if (err) {
            return reply(err);
        }
        // Else, refresh the page.
        return reply.redirect('/dashboard');
    });
}

function destroyRemote(request, reply) {
    const user = request.yar.get('user');
    const idToken = user && user.tokens.idToken.jwtToken;
    const { id } = request.params;

    return RemoteService.destroy(idToken, id, (err, payload) => {
        if (err) {
            reply(err);
        }
        reply.redirect('/dashboard');
    });
}

function updateRemote(request, reply) {
    const user = request.yar.get('user');
    const idToken = user && user.tokens.idToken.jwtToken;
    const { _method, temperature, name } = request.payload;
    const { id } = request.params;

    if (_method === 'DELETE') {
        return destroyRemote(request, reply);
    }

    const data = {
        id,
        name,
        temperature
    };

    debugger

    return RemoteService.update(idToken, data, (err, payload) => {
        debugger;
        if (err) {
            return reply(err);
        }
        return reply.redirect('/dashboard');
    });
}

module.exports = {
    createRemote,
    updateRemote
};
