'use strict';

function handler(request, reply) {
    const user = request.yar.get('user');
    return reply.view('login', {
        user
    });
}

module.exports = handler;
