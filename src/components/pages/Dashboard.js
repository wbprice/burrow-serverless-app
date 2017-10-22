import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RemoteForm from './../organisms/RemoteForm';

export default class Dashboard extends Component {
    render() {
        return (
            <div class="container">
                <h1>Dashboard</h1>
                <p>Manage your remotes here</p>

                {this.props.remotes.map(remote => {
                    return (
                        <RemoteForm 
                            id={remote.id}
                            temperature={remote.temperature}
                            name={remote.name}
                        />
                    )
                })}

                { !this.props.remotes.length &&
                    <div class="card">
                        <h2>DEBUG</h2>
                        <p>There aren't any remotes!  You should create one.</p>
                        <RemoteForm />
                    </div>
                }
            </div>
        )
    }
}

Dashboard.propTypes = {
    remotes: PropTypes.array
}
