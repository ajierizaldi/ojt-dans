import React, { Component } from "react";

class Construct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            license: "ini certificate"
        };
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent() {
        this.setState({
            license: "ini certificatenya"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.license}</h1>
                <button onClick={this.handleEvent}>Click</button>
            </div>
        );
    }
}

export default Construct;