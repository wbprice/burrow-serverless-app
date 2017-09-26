'use strict';

const fbAppId = process.env.FB_APP_ID;
const signupRedirect = process.env.SOCIAL_LOGIN_REDIRECT;

function handler(request, reply) {
    const user = request.yar.get('user');
    return reply.view('signup', { 
        user,
        fbAppId,
        signupRedirect
    });
}

module.exports = handler;
