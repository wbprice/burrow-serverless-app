'use strict';

const Wreck = require('wreck');
const fbAppId = process.env.FB_APP_ID;
const fbAppSecret = process.env.FB_APP_SECRET;
const socialLoginRedirect = process.env.SOCIAL_LOGIN_REDIRECT;

function getAccessToken(code, callback) {
    const options = {
        json: true
    }

    const url = 'https://graph.facebook.com/v2.10/oauth/access_token?' +
                `client_id=${fbAppId}` +
                `&redirect_uri=${socialLoginRedirect}` +
                `&client_secret=${fbAppSecret}` +
                `&code=${code}`;
    
    return Wreck.get(url, options, (err, response, payload) => {
        if (err) {
            return callback(err)
        }
        return callback(null, payload);
    });
}

function socialLogin(request, reply) {
    const { code } = request.query;

    getAccessToken(code, (err, accessCode) => {
        if (err) {
            //handle error
        }
        // handle success
    });
}

module.exports = socialLogin;