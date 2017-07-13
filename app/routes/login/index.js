'use strict';

function handler(request, reply) {
    const user = request.yar.get('user');
    reply.view('login', {
        user
    });
}

module.exports = handler;
