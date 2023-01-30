import React, { Component } from 'react';

import Sidebar from '../partials/Sidebar';

class Dashboard extends Component {
    render() {
        return (
            <div className='container border border-dark'>
                <h4>Container</h4>
                <div className="row">
                    <div className="col-md-6">
                        <Sidebar />
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;