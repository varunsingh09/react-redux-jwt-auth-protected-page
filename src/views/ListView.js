import React, { Component } from 'react';
import {Link} from 'react-router';

export default class ListView extends Component {

    render () {
        return (
            <div>
                <h1>React Redux List Open View Example</h1>
                <p>Attempt to access some <Link to='/list'>list view content.</Link></p>
            </div>
        );
    }

}
