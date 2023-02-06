import React, { Component } from 'react';

import Sidebar from '../../partials/Sidebar';
import Construct from './Construct';
import IniUseEffect from './UseEffect';
import IniDidMount from './DidMount';

class IniWillUnMount extends Component {
    // define componentUnmount
    componentWillUnmount() {
        alert("Component Unmount testing");
    }

    render() {
        return (
            <div>
                <h1>Component Unmount</h1>
            </div>
        );
    }
}

class CertificateContainer extends Component {
    state = { display: true }
    destroy = () => {
        this.setState({ display: false });
    }

    render() {
        if (this.state.display) {
            var unmount = <IniWillUnMount />;
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="mt-5">
                            {unmount}
                            <button
                                onClick={this.destroy}
                            >Raise this ticket</button>
                            <hr />
                            <Construct />
                            <br />
                            <hr />
                            <div className="certificate">
                                <h4>Ini Certificate</h4>
                                <div className="d-flex">
                                    <IniDidMount /> <IniUseEffect />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CertificateContainer;