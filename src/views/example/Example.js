import * as React from "react";

class Example extends React.Component {
    state = {
        name: "TOKUDA",
        longName: "Con mọe nó"
    }

    render() {
        return (
            <>
                <h6>Hi {this.state.name}</h6>
            <p className="mycss-class">Hello chú em chú muốn nói: {this.state.longName}</p>
            </>
        );
    }
}

export default Example;