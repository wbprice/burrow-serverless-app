'use strict';

import React, { Component } from 'react';
import Layout from './../layout';

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <div class="container">
                    <div class="hero">
                        <div class="call-to-action">
                            <img width="250" src="/assets/images/air-conditioner.png" alt="Burrow makes your air conditioner smarter" />
                            <h1>Your Apartment, Just Smarter</h1>
                            <p>Burrow helps apartment-dwellers automate their air conditioners</p>
                        </div>
                        <div class="take-action">
                            <a class="button primary big" href="/signup">Get Started</a>
                            <a class="button big" href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

