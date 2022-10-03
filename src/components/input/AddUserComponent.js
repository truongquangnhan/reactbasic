import React from "react";
import User from "../user/User";

class AddUserComponent extends React.Component {
    state = {
        name: "",
        description: "",
        old: "99",
        corporation: "",
        userList: [{
            id: 1,
            name: "Tran Dan",
            description: "Phap su",
            old: "99"
        }, {
            id: 2,
            name: "Mikami",
            description: "Javanese",
            old: "99"
        }, {
            id: 3,
            name: "Tokuda",
            description: "Text",
            old: "99"
        }]
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleOnChangeOld = (event) => {
        this.setState({
            old: event.target.value
        })
    }
    handleOnChangeCorporation = (event) => {
        this.setState({
            corporation: event.target.value
        })
    }
    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    handleOnSubmit = (event) => {
        // unloadPage
        event.preventDefault();
        console.log("Submited");
        const user = {
            id: this.getRandomInt(1000),
            name: this.state.name,
            description: this.state.description,
            old: this.state.old
        }

        this.setState({
            name: "",
            description: "",
            old: "",
            corporation: "",
            userList: [...this.state.userList, user]
        });
    }

    handleConsole = (prop) => {
        console.log(prop);
    }
    render() {
        return (
            <form>
                <table className={"text-small-5px aline-l table-user"}>
                    <tbody className={"boder-table-1px-solid"}>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" value={this.state.name} onChange={this.handleOnChangeName}/></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><input type="text" value={this.state.description}
                                   onChange={this.handleOnChangeDescription}/></td>
                    </tr>
                    <tr>
                        <td>old:</td>
                        <td><input type="number" value={this.state.old} onChange={this.handleOnChangeOld}/></td>
                    </tr>
                    <tr>
                        <td>Corporation:</td>
                        <td><input type="text" value={this.state.corporation}
                                   onChange={this.handleOnChangeCorporation}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="submit" value={"submit"} onClick={this.handleOnSubmit}/></td>
                    </tr>
                    </tbody>
                    <User handleConsole={this.handleConsole} userInfo={this.state} userList={this.state.userList}/>
                </table>
            </form>
        )
    }
}

export default AddUserComponent;