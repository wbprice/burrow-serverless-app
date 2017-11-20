import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import Input from './../molecules/Input'

class SignupForm extends Component {

    setName(event) {

    }

    setEmailAddress(event) {

    }

    setPassword(event) {

    }

    setConfirmPassword(event) {

    }

    render() {
        return (
            <form action="/signup" method="post">
                <Input
                    name="name"
                    label="Name"
                    onChange={this.setName.bind(this)}
                    name={this.props.name.value}
                    error={this.props.name.error} />

                <Input
                    name="emailAddress"
                    label="Email Address"
                    onChange={this.setEmailAddress.bind(this)}
                    value={this.props.emailAddress.value}
                    error={this.props.emailAddress.error} />

                <Input
                    name="name"
                    label="Password"
                    onChange={this.setPassword.bind(this)}
                    value={this.props.password.value}
                    error={this.props.password.error} />

                <Input
                    name="name"
                    label="Confirm Password"
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