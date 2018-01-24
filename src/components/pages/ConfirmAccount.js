import React, { Component } from 'react';

import Card from './../atoms/Card';
import ConfirmForm from './../organisms/ConfirmForm';

export default class ConfirmAccount extends Component {
    render() {
        return (
            <div className="confirm-account container">
                <Card>
                    <ConfirmForm />
                </Card>
            </div>
        )
    }
}