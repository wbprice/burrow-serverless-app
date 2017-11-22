import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import {
    setUsername,
    setPassword,
    setEmailAddress,
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
        this.props.dispatch(signup());
    }

    render() {
        return (
            <form onSubmit={this.signup.bind(this)}>
                <Input
                    name="name"
                    label="Name"
                    help="What username will you login with?"
                    onChange={this.setName.bind(this)}
                    name={this.props.name.value}
                    error={this.props.name.error} />

                <Input
                    name="emailAddress"
                    label="Email Address"
                    help="Contact email address for verifying your account"
                    onChange={this.setEmailAddress.bind(this)}
                    value={this.props.emailAddress.value}
                    error={this.props.emailAddress.error} />

                <Input
                    name="name"
                    label="Password"
                    type="password"
                    help="Enter your desired password"
                    onChange={this.setPassword.bind(this)}
                    value={this.props.password.value}
                    error={this.props.password.error} />

                <Input
                    name="name"
                    label="Confirm Password"
                    type="password"
                    help="Confirm your password"
                    onChange={this.setConfirmPassword.bind(this)}
                    value={this.props.confirmPassword.value}
                    error={this.props.confirmPassword.error} />

                <button class="primary" type="submit">Submit</button>
            </form>
        )
    }
}

SignupForm.propTypes = {
    error: PropTypes.object
};

export default connect((state) => {
    return {
        emailAddress: state.signup.username,
        password: state.signup.password,
        confirmPassword: state.signup.confirmPassword,
        name: state.signup.name
    }
})(SignupForm)