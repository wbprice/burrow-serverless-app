'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './templates/Header';

export default class Layout extends Component {
    render() {
        return (
            <html>
                <head>
                    <title>Burrow</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
                    <link rel="stylesheet" href="/style.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>

                <body>
                    <Header user={this.props.user} />

                    { this.props.children } 
                </body>
            </html>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.any,
    user: PropTypes.object
};
