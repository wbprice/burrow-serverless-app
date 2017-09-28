'use strict';

function confirmAccount(request, reply) {
    const user = request.yar.get('user'); 
    reply.view('confirm-account', {
        user
    });
}

module.exports = confirmAccount;
