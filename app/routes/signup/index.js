'use strict';

function handler(request, reply) {
    const user = request.yar.get('user');
    reply.view('signup', { user });
}

module.exports = handler;
