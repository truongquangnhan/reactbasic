import React from "react";
import UserModel from "../../../models/UserModel";

class AddUserComponent extends React.Component {
    state = {
        userModel: new UserModel("", "", "", "", "", "", "", ""),
        currentUserModel: new UserModel(),
        isSelectUserFlg: false,
        showFlg: false,
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

    handleOnChangeUserModel = (event) => {
        let userModelCurrent = {...this.state.userModel};
        if (event.target.name === "firstName") {
            userModelCurrent.firstName = event.target.value;
        } else if (event.target.name === "lastName") {
            userModelCurrent.lastName = event.target.value;
        } else if (event.target.name === "birthDay") {
            userModelCurrent.birthDay = event.target.value;
        } else if (event.target.name === "sex") {
            userModelCurrent.sex = event.target.value;
        } else if (event.target.name === "religion") {
            userModelCurrent.religion = event.target.value;
        } else if (event.target.name === "nationality") {
            userModelCurrent.nationality = event.target.value;
        } else if (event.target.name === "corporate") {
            userModelCurrent.corporate = event.target.value;
        }
        this.setState({
            userModel: userModelCurrent
        });
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    handleOnSubmit = (event) => {
        // unloadPage
        event.preventDefault();
        let currentUser = {...this.state.userModel};
        let user = new UserModel(
            this.getRandomInt(1000),
            currentUser.firstName,
            currentUser.lastName,
            currentUser.birthDay,
            currentUser.sex,
            currentUser.religion,
            currentUser.nationality,
            currentUser.corporate)
        this.props.handleOnClickAddUserModel(user);

        this.setState({
            name: "",
            description: "",
            old: "",
            corporation: "",
        });
        this.handleOnClickHideForm()
    }

    handleCloneUserModelData = (event) => {
        event.preventDefault();
        this.setState({
            userModel: {...UserModel.cloneUserModel()}
        })
    };

    handleOnClickHideForm = (event) => {
        if (event) {
            event.preventDefault();
        }

        this.props.handleOnClickShowForm()
    };

    render() {
        return (
            <form className={"form-user-add"}>
                <table className={"text-small-5px aline-l"}>
                    <caption><h4>{this.props.title}</h4></caption>
                    <tbody className={"boder-table-1px-solid"}>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name={"firstName"} value={this.state.userModel.firstName}
                                   onChange={this.handleOnChangeUserModel}/></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" name={"lastName"} value={this.state.userModel.lastName}
                                   onChange={this.handleOnChangeUserModel}/></td>
                    </tr>
                    <tr>
                        <td>Birthday:</td>
                        <td><input type="text" name={"birthDay"} value={this.state.userModel.birthDay}
                                   onChange={this.handleOnChangeUserModel}/></td>
                    </tr>
                    <tr>
                        <td>Sex:</td>
                        <td>
                            <input type="text" name={"sex"} value={this.state.userModel.sex}
                                   onChange={this.handleOnChangeUserModel}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Religion:</td>
                        <td><input type="text" name={"religion"} value={this.state.userModel.religion}
                                   onChange={this.handleOnChangeUserModel}/></td>
                    </tr>
                    <tr>
                        <td>Nationality:</td>
                        <td><input type="text" name={"nationality"} value={this.state.userModel.nationality}
                                   onChange={this.handleOnChangeUserModel}/></td>
                    </tr>
                    <tr>
                        <td>Corporate:</td>
                        <td><input type="text" name={"corporate"} value={this.state.userModel.corporate}
                                   onChange={this.handleOnChangeUserModel}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" className={"btn btn-close"} value={"Close"}
                                   onClick={this.handleOnClickHideForm}/>
                            <input type="submit" className={"btn btn-default-right"} value={"Submit"}
                                   onClick={this.handleOnSubmit}/>
                            <input type="submit" className={"btn btn-default-right"} value={"Clone data"}
                                   onClick={this.handleCloneUserModelData}/>

                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default AddUserComponent;