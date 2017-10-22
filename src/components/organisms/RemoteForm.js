'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RemoteForm extends Component {
    render() {
        return (
            <div>
                <form action={`/api/v1/remote/${this.props.id}`} method="post">
                    <div>
                        <label for="temperature">Temperature</label>
                        <input 
                            required 
                            name="temperature" 
                            id="temperature" 
                            placeholder="72" 
                            type="number"
                            value={this.props.temperature} />
                    </div>
                
                    <div>
                        <label for="name">Remote Name</label>
                        <input 
                            required 
                            name="name" 
                            id="name" 
                            placeholder="Name (eg. Living Room)" 
                            type="text"
                            value={this.props.name} />
                    </div>
                
                    <button type="submit">Update</button>
                </form>
                
                { this.props.id && 
                    <form action={`/api/v1/remote/${this.props.id}`} method="post">
                        <input type="hidden" name="_method" value="DELETE" />
                        <button type="submit">Delete</button>
                    </form>
                }
            </div>
        )
    }
}

RemoteForm.propTypes = {
    id: PropTypes.number,
    temperature: PropTypes.number,
    name: PropTypes.string
};
