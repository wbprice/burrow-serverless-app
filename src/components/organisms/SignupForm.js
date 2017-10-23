import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignupForm extends Component {
    render() {
        return (
            <form action="/signup" method="post">
                <div>
                    <label htmlFor="name">Name</label>
                    <input required name="name" id="name" placeholder="Name" type="text" />
                    { this.props.error.name &&
                        <p class="input-error">{this.props.error.name}</p>
                    }
                </div>

                <div>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input required name="emailAddress" id="emailAddress" placeholder="Email Address" type="email" />
                    { this.props.error.username &&
                        <p class="input-error">{this.props.error.username}</p>
                    }
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input required name="password" id="password" placeholder="Password" type="password" />
                    { this.props.error.password &&
                        <p class="input-error">{this.props.error.password}</p>
                    }
                </div>

                <button class="primary" type="submit">Submit</button>
            </form>
        )
    }
}

SignupForm.propTypes = {
    error: PropTypes.object
};
