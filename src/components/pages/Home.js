import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import AirConditioner from './../../images/air-conditioner.png';

export default class Home extends Component {
    render() {
        return (
            <div className="index container">
                <div className="hero">
                    <div className="call-to-action">
                        <img width="250" src={AirConditioner} alt="Burrow makes your air conditioner smarter" />
                        <h1>Your Apartment, Just Smarter</h1>
                        <p>Burrow helps apartment-dwellers automate their air conditioners</p>
                    </div>
                    <div className="take-action">
                        <Link to="/signup" className="button primary big">Get Started</Link>
                        <Link to="/login" className="button big">Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}
