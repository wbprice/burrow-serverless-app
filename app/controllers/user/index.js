'use strict';

const UserService = require('./../../services/user');
const Boom = require('boom');

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
            name,
            emailAddress,
            id
        } = payload;

        request.yar.set('user', {name, emailAddress, id});
        return reply.redirect('/dashboard');
    });
}

module.exports = {
    login,
    logout,
    signup
};
