import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
    setConfirmationCode,
    confirmAccount,
    setEmailAddress
} from './../../store/actions/signup-actions';

import Input from './../molecules/Input';

class ConfirmForm extends Component {

    confirm(event) {
        event.preventDefault();
        this.props.dispatch(confirmAccount(
            this.props.emailAddress.value,
            this.props.confirmationCode.value
        ));
    }

    setEmailAddress(event) {
        this.props.dispatch(setEmailAddress(event.target.value));
    }

    setConfirmationCode(event) {
        this.props.dispatch(setConfirmationCode(event.target.value));
    }

    render() {
        return (
            <form onSubmit={this.confirm.bind(this)}>
                <Input
                    name="emailAddress"
                    label="Email Address"
                    onChange={this.setEmailAddress.bind(this)}
                    value={this.props.emailAddress.value}
                    error={this.props.emailAddress.error} />

                <Input
                    name="confirmationCode"
                    label="Confirmation Code"
                    onChange={this.setConfirmationCode.bind(this)}
                    value={this.props.confirmationCode.value}
                    error={this.props.confirmationCode.error} />

                <button className="primary" type="submit">Submit</button>
            </form>
        )
    }
}

ConfirmForm.propTypes = {
    dispatch: PropTypes.func,
    confirmationCode: PropTypes.object,
    emailAddress: PropTypes.object
}

export default connect(({signup}) => {
    return {
        confirmationCode: signup.confirmationCode,
        emailAddress: signup.emailAddress
    }
})(ConfirmForm);