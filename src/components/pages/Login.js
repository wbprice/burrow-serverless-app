import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './../organisms/LoginForm';
import Card from './../atoms/Card';

export default class Login extends Component {
    render() {
        return (
            <div className="login container">
                <Card>
                    <LoginForm />
                </Card>
            </div>
        )
    }
}

Login.propTypes = {
    error: PropTypes.object
}
