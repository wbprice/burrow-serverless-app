import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import {
    setUsername,
    setEmailAddress,
    setPassword,
    setConfirmPassword,
    signup
} from './../../store/actions/signup-actions';

import Input from './../molecules/Input'

class SignupForm extends Component {

    setName(event) {
        this.props.dispatch(setUsername(event.target.value))
    }

    setEmailAddress(event) {
        this.props.dispatch(setEmailAddress(event.target.value))
    }

    setPassword(event) {
        this.props.dispatch(setPassword(event.target.value))
    }

    setConfirmPassword(event) {
        this.props.dispatch(setConfirmPassword(event.target.value))
    }

    signup(event) {
        event.preventDefault();
        this.props.dispatch(signup(
            this.props.username.value,
            this.props.emailAddress.value,
            this.props.password.value,
            this.props.confirmPassword.value
        ));
    }

    render() {
        return (
            <form onSubmit={this.signup.bind(this)}>
                <Input
                    name="username"
                    label="Name"
                    help="What name do you go by?"
                    onChange={this.setName.bind(this)}
                    value={this.props.username.value}
                    error={this.props.username.error} />

                <Input
                    name="emailAddress"
                    label="Email Address"
                    help="Contact email address for verifying your account"
                    onChange={this.setEmailAddress.bind(this)}
                    value={this.props.emailAddress.value}
                    error={this.props.emailAddress.error} />

                <Input
                    name="password"
                    label="Password"
                    type="password"
                    help="Enter your desired password"
                    onChange={this.setPassword.bind(this)}
                    value={this.props.password.value}
                    error={this.props.password.error} />

                <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    help="Confirm your password"
                    onChange={this.setConfirmPassword.bind(this)}
                    value={this.props.confirmPassword.value}
                    error={this.props.confirmPassword.error} />

                <button className="primary" type="submit">Submit</button>
            </form>
        )
    }
}

SignupForm.propTypes = {
    error: PropTypes.object
};

export default connect(({signup}) => {
    return {
        username: signup.username,
        emailAddress: signup.emailAddress,
        password: signup.password,
        confirmPassword: signup.confirmPassword,
    }
})(SignupForm);
