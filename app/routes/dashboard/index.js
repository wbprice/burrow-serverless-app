'use strict';

function handler(request, reply) {
    const user = request.yar.get('user');
    reply.view('dashboard', {
        user
    });
}

module.exports = handler;
