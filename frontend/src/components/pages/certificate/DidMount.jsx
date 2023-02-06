import React, { Component } from "react";


// Bikin counter
class IniDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lcounter: 0
        };
    }

    // ComponentDidMount buat ngecek apakah ada perubahan di state
    componentDidMount() {
        this.setState({
            lcounter: this.state.lcounter + 1
        });
    }

    // ComponentDidUpdate digunakan untuk mengupdate state
    componentDidUpdate() {
        console.log("Update");
    }

    render() {
        return (
            <div className="p-3">
                <button onClick={() => this.setState({ lcounter: this.state.lcounter + 1 })}>
                    Click : {this.state.lcounter}
                </button>
            </div>
        );
    }
}

export default IniDidMount;