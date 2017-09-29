'use strict';

const {
    API_ROOT,
    FB_APP_ID,
    SOCIAL_LOGIN_REDIRECT,
} = process.env;

function handler(request, reply) {
    const user = request.yar.get('user');

    return reply.view('login', {
        user
    });
}

module.exports = handler;
