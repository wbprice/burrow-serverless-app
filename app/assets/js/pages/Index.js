'use strict';

import React, { Component } from 'react';
import Layout from './../layout';
import PropTypes from 'prop-types';

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="hero">
                        <div className="call-to-action">
                            <img width="250" src="/assets/images/air-conditioner.png" alt="Burrow makes your air conditioner smarter" />
                            <h1>Your Apartment, Just Smarter</h1>
                            <p>Burrow helps apartment-dwellers automate their air conditioners</p>
                        </div>
                        <div className="take-action">
                            <a className="button primary big" href="/signup">Get Started</a>
                            <a className="button big" href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

Index.propTypes = {
    user: PropTypes.object 
};
