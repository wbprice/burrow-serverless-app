import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AirConditioner from './../../images/air-conditioner.png';
import LoginForm from './../organisms/LoginForm';
import Card from './../atoms/Card';

export default class Login extends Component {
    render() {
        return (
            <div className="login container">
                <Card>
                    <LoginForm error={{}} />
                </Card>
            </div>
        )
    }
}

Login.propTypes = {

}
