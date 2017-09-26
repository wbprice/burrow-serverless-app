'use strict';

const path = require('path');

const {
    API_ROOT,
    FB_APP_ID,
    SOCIAL_LOGIN_REDIRECT,
} = process.env;

function handler(request, reply) {
    const user = request.yar.get('user');

    return reply.view('login', {
        user,
        FB_APP_ID,
        SOCIAL_LOGIN_REDIRECT
    });
}

module.exports = handler;
