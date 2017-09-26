'use strict';

const fbAppId = process.env.FB_APP_ID;

function handler(request, reply) {
    const user = request.yar.get('user');
    return reply.view('login', {
        user,
        fbAppId,
        signupRedirect: 'http://localhost/social-login' 
    });
}

module.exports = handler;
