import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router'

export default class Header extends Component {
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
                              this.props.user && this.props.user.name ? [
                                <a href="/dashboard"><li class="navbar-item">Dashboard</li></a>,
                                <a href="/help"><li class="navbar-item">Help</li></a>,
                                <li className="navbar-item">{this.props.user.name} <a href="/logout">Logout</a></li>
                              ] : 
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
