import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

class Toast extends Component {
    render() {
        if (this.props.message) {
            return (
                <div className={`toast ${this.props.level}`}>
                    <div className="container">
                        <div className="message">{this.props.message}</div>
                    </div>
                </div>
            )
        }
        return ''
    }
}

Toast.propTypes = {
    level: PropTypes.string,
    message: PropTypes.string
}

export default connect((state) => {
    return {
        level: state.toast.level,
        message: state.toast.message
    }
})(Toast)
