'use strict';

const UserService = require('./../../services/user');
const Boom = require('boom');

const Wreck = require('wreck');

function socialLogin(request, reply) {
    const { code } = request.query;
    return UserService.socialLogin(code, (err, data) => {
        if (err) {
            reply(err);
        }
        return reply(data);
    });
}

module.exports = socialLogin;

function login(request, reply) {
    const {
        emailAddress,
        password
    } = request.payload;

    return UserService.login(emailAddress, password, (err, payload) => {
        if (err) {
            return reply(err);
        }

        const {
            name,
            emailAddress,
            id
        } = payload;

        request.yar.set('user', {name, emailAddress, id});
        return reply.redirect('/dashboard');
    });
}

function logout(request, reply) {
    request.yar.set('user', {});
    return reply.redirect('/');
}

function signup(request, reply) {
    const data = request.payload;

    // Confirm that passwords match.
    if (data.password !== data.confirmPassword) {
        return reply(Boom.unauthorized('Entered passwords didn\'t match'));
    }

    return UserService.signup(data, (err, payload) => {
        if (err) {
            return reply(err);
        }

        const {
            username,
        } = payload;

        request.yar.set('user', {
            username,
            confirmed: false
        });

        return reply.redirect('/confirm-account');
    });
}

function confirmAccount(request, reply) {
    const { confirmationCode } = request.payload;
    const { username } = request.yar.get('user');

    if (!confirmationCode) {
        return reply(Boom.unauthorized('Please supply a confirmation code'));
    }

    if (!username) {
        return reply(Boom.unauthorized('You need to be logged in to do this'));
    }

    return UserService.confirmAccount(username, confirmationCode, (err, payload) => {
        if (err) {
            return reply(err);
        }
        return reply.redirect('/dashboard');
    });
}

module.exports = {
    login,
    socialLogin,
    logout,
    signup,
    confirmAccount
};
