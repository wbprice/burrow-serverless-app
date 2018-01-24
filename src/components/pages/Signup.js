import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignupForm from './../organisms/SignupForm';
import Card from './../atoms/Card';

export default class Signup extends Component {
    render() {
        return (
            <div className="login container">
                <Card>
                    <SignupForm />
                </Card>
            </div>
        )
    }
}

Signup.propTypes = {
    error: PropTypes.object
}
