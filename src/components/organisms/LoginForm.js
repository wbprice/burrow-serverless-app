import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Input from './../molecules/Input'

import {
    login
} from './../../store/actions/login-actions';

import {
    setEmailAddress,
    setPassword
} from './../../store/actions/signup-actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setEmailAddress(event) {
        this.props.dispatch(setEmailAddress(event.target.value));
    }

    setPassword(event) {
        this.props.dispatch(setPassword(event.target.value));
    }

    login(event) {
        event.preventDefault();
        this.props.dispatch(login(
            this.props.emailAddress.value,
            this.props.password.value
        ))
    }

    render() {
        return (
            <form onSubmit={this.login.bind(this)} action="/login" method="post">
                <Input
                    onChange={this.setEmailAddress.bind(this)}
                    value={this.props.emailAddress.value}
                    error={this.props.emailAddress.error}
                    required
                    name="emailAddress"
                    label="Email Address"
                    type="email" />

                <Input
                    onChange={this.setPassword.bind(this)}
                    value={this.props.password.value}
                    error={this.props.password.error}
                    required
                    name="password"
                    label="Password"
                    type="password" />

                <button className="primary" type="submit">Submit</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    error: PropTypes.object
};

export default connect((state) => {
    return {
        emailAddress: state.login.emailAddress,
        password: state.login.password
    }
})(LoginForm);