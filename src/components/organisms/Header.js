import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
    logout
} from './../../store/actions/login-actions';

class Header extends Component {

    logout(event) {
        event.preventDefault();
        this.props.dispatch(logout(this.props.user.tokens.accessToken.jwtToken));
    }

    render() {
        return (
            <section className="header">
                <div className="container">
                    <a href="/">
                        <b className="app-name">Burrow</b>
                    </a>
                    <nav>
                        <ul className="navbar-list">
                            {
                              this.props.user && this.props.user.name ?
                              <li className="navbar-item">{this.props.user.name} <button onClick={this.logout.bind(this)}>Logout</button></li>:
                              <li className="navbar-item"><a href="/login">Login</a></li>
                            }
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

Header.propTypes = {
    user: PropTypes.object
};

export default connect((state) => {
    return {
        user: state.user,
    }
})(Header)
