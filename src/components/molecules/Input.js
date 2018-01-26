import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div className={`input ${this.props.error && 'error'}`}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input 
                    onChange={this.props.onChange}
                    value={this.props.value}
                    required={this.props.required} 
                    name={this.props.name} 
                    id={this.props.name}
                    placeholder={this.props.placeholder ||this.props.label}
                    type={this.props.type || 'text'} />
                { !this.props.error && this.props.help &&
                    <div className="help-text">{this.props.help}</div>
                }
                { this.props.error &&
                    <div className="error-text">{this.props.error}</div>
                }
            </div>
        )
    }
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    explanation: PropTypes.string
}