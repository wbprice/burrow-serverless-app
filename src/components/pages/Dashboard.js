import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import RemoteForm from './../organisms/RemoteForm';
import { fetchRemotes } from './../../store/actions/dashboard-actions'

class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(fetchRemotes(this.props.idToken))
    }

    render() {
        return (
            <div className="container">
                <h1>Dashboard</h1>
                <p>Manage your remotes here</p>

                <div className="remotes">
                    {this.props.remotes.map((remote, index) => {
                        return (
                            <RemoteForm
                                id={remote.id}
                                key={remote.id}
                                idToken={this.props.idToken}
                                dispatch={this.props.dispatch}
                                temperature={remote.temperature}
                                name={remote.name}
                            />
                        )
                    })}
                </div>

                <div className="card">
                    <h2>New Remote</h2>
                    <RemoteForm 
                        idToken={this.props.idToken}
                        dispatch={this.props.dispatch}
                        temperature={this.props.debug.temperature}
                        name={this.props.debug.name}
                    />
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    remotes: PropTypes.array
}

export default connect((state) => {
    return {
        remotes: state.dashboard.remotes,
        debug: state.dashboard.debug,
        idToken: state.user.tokens.idToken && state.user.tokens.idToken.jwtToken
    }
})(Dashboard)
