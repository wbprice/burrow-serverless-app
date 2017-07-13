'use strict';

function logout(request, reply) {
    request.yar.set('user', {});
    reply.redirect('/');
}

module.exports = logout;
