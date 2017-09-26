'use strict';

const {
    API_ROOT,
    FB_APP_ID,
    SOCIAL_LOGIN_REDIRECT,
} = process.env;

function handler(request, reply) {
    const user = request.yar.get('user');
    debugger;
    return reply.view('signup', { 
        user,
        FB_APP_ID,
        SOCIAL_LOGIN_REDIRECT: path.join(API_ROOT, SOCIAL_LOGIN_REDIRECT)
    });
}

module.exports = handler;
