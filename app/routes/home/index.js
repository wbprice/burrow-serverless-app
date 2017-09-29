'use strict';

function handler(request, reply) {
    const user = request.yar.get('user');

    if (user) {
        return reply.redirect('dashboard');
    }

    return reply.view('index');
}

module.exports = handler;
