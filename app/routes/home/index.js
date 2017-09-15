'use strict';

function handler(request, reply) {
    const user = request.yar.get('user');
    return reply.view('index', {
        user
    });
}

module.exports = handler;
