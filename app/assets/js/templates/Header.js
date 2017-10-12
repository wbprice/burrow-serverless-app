'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        const user = this.props.user || {};

        return (
            <section className="header">
                <div className="container">
                    <a href="/">
                        <b className="app-name">Burrow</b>
                    </a>
                    <nav>
                        <ul className="navbar-list">
                            { (() => {
                                if (user.name) {
                                    return [
                                        <a href="/dashboard"><li className="navbar-item">Dashboard</li></a>,
                                        <a href="/help"><li className="navbar-item">Help</li></a>,
                                        <li className="navbar-item">{user.name} <a href="/logout">Logout</a></li>
                                    ];
                                }
                                return <li className="navbar-item"><a href="/login">Login</a></li>
                            })()}
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

