import * as React from "react";

class Example extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(prob) {
        super(prob);
    }

    state = {
        name: "TOKUDA",
        longName: "TEXT EXAMPLE",
        countClick: 0
    }

    handleClickRegister = () => {
        let click = this.state.countClick + 1;
        this.setState({
            countClick: click
        })
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <p>INPUT NAME[count: {this.state.countClick}]: </p>
                <input value={this.state.name} type={"text"} onChange={this.handleChange}/>
                <br/>
                <input type="button" onClick={this.handleClickRegister} value="Nhấn vào đây"/>
                <h6>Hi {this.state.name}</h6>
                <p className="mycss-class">DESCRIPTION: {this.state.longName}</p>
            </>
        );
    }
}

export default Example;