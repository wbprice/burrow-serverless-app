import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                        <a className="button primary big" href="/signup">Get Started</a>
                        <a className="button big" href="/login">Login</a>
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {

}
