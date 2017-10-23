import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
    setUsername,
    setPassword
} from './../../store/actions/login-actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setUsername(event) {
        this.props.dispatch(setUsername(event.target.value));
    }

    setPassword(event) {
        this.props.dispatch(setPassword(event.target.value));
    }

    render() {
        return (
            <form action="/login" method="post">
                <div>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input 
                        onChange={this.setUsername.bind(this)}
                        value={this.props.username.value}
                        required 
                        name="emailAddress" 
                        id="emailAddress" 
                        placeholder="Email Address" 
                        type="email" /> 
                    { this.props.username.error &&
                        <p className="error-text">{this.props.username.error}</p>
                    }
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input required name="password" id="password" placeholder="Password" type="password" />
                    { this.props.password.error &&
                        <p className="error-text">{this.props.password.error}</p>
                    }
                </div>

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
        username: state.login.username,
        password: state.login.password
    }
})(LoginForm);