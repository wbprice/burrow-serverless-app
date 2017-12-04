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

                {this.props.remotes.map(remote => {
                    return (
                        <RemoteForm
                            key={remote.id}
                            dispatch={this.props.dispatch}
                            id={remote.id}
                            temperature={remote.temperature}
                            name={remote.name}
                        />
                    )
                })}

                { !this.props.remotes.length &&
                    <div className="card">
                        <h2>DEBUG</h2>
                        <p>There aren't any remotes!  You should create one.</p>
                        <RemoteForm 
                            idToken={this.props.idToken}
                            dispatch={this.props.dispatch}
                            temperature={this.props.debug.temperature}
                            name={this.props.debug.name}
                        />
                    </div>
                }
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
        idToken: state.user.tokens.idToken.jwtToken
    }
})(Dashboard)
