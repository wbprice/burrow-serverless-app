import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Input from './../molecules/Input'
import {
    setRemoteTemperature,
    setRemoteName,
    createRemote,
    updateRemote
} from './../../store/actions/dashboard-actions'

class RemoteForm extends Component {

    setTemperature(event) {
        return this.props.dispatch(setRemoteTemperature(
            this.props.id, 
            event.target.value
        ))
    }

    setName(event) {
        return this.props.dispatch(setRemoteName(
            this.props.id,
            event.target.value
        ))
    }

    onSubmit(event) {
        event.preventDefault()
        if (this.props.id) {
            return this.props.dispatch(updateRemote(
                this.props.idToken,
                this.props.id,
                this.props.temperature.value,
                this.props.name.value
            ))
        }
        return this.props.dispatch(createRemote(
            this.props.idToken,
            this.props.temperature.value,
            this.props.name.value
        ))
    }

    render() {
        return (
            <form 
                onSubmit={this.onSubmit.bind(this)}>
                <Input
                    onChange={this.setTemperature.bind(this)}
                    value={this.props.temperature.value}
                    error={this.props.temperature.error}
                    required
                    name="temperature"
                    label="Temperature"
                    type="number" />

                <Input
                    onChange={this.setName.bind(this)}
                    value={this.props.name.value}
                    error={this.props.name.error}
                    required
                    name="name"
                    label="Name"
                    type="text" />
            
                <button type="submit">Update</button>
            </form>
        )
    }
}

RemoteForm.propTypes = {
    id: PropTypes.string,
    temperature: PropTypes.object,
    name: PropTypes.object,
    idToken: PropTypes.string
};

export default RemoteForm;