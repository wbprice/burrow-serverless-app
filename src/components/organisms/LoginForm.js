import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    render() {
        return (
            <form action="/login" method="post">
                <div>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input required name="emailAddress" id="emailAddress" placeholder="Email Address" type="email" /> 
                    { this.props.error.username &&
                        <p className="error-text">{this.props.error.username}</p>
                    }
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input required name="password" id="password" placeholder="Password" type="password" />
                    { this.props.error.password &&
                        <p className="error-text">{this.props.error.password}</p>
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
