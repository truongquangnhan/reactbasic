import React from "react";
import AddUserComponent from "../input/AddUserComponent";
import UserFormComponent from "../user/UserFormComponent";

class UserTableComponent extends React.Component {

    state = {
        showAddFormFlg: false,
        showDetailFormFlg: false,
        selectUserId: "",
        userList: this.props.userList,
        message: ""
    }
    handleOnClickShowForm = () => {
        this.setState({
            showAddFormFlg: !this.state.showAddFormFlg
        })
    };

    handleOnClickShowFormDetail = (id) => {
        console.log("callback01");
        this.setState({
            showDetailFormFlg: !this.state.showDetailFormFlg,
            selectUserId: id
        })
    };

    handleOnClickAddUserModel = (userModel) => {
        this.setState({
            userList: [...this.state.userList, userModel]
        })
    }

    handleOnClickUpdateUserModel = (userModel) => {
        let currentList = [...this.state.userList];
        currentList = currentList.map((item, index) => {
            if (item.id === userModel.id) {
                return userModel;
            }
            return item;
        });
        this.setState({
            userList: currentList
        })
    }

    handleOnClickDeleteUser = (userId) => {
        let currentList = [];
        // eslint-disable-next-line array-callback-return
        [...this.state.userList].filter((item, index) => {
            if (item.id !== userId) {
                currentList.push(item);
            }
        });

        this.setState({
            userList: currentList
        })
    }

    componentDidMount() {
        console.log("-----componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("-----componentDidUpdate");
    }

    render() {
        let {showFlg, caption} = this.props;
        let userList = this.state.userList;
        // Validation data
        if (!userList) {
            return <span className={"aline-c"}>No data</span>
        }

        return (
            <>{showFlg &&
                <>
                    <table className={"view-table"}>
                        <caption><h3>{caption}</h3>
                            <div className={"btn btn-add"}>{!this.state.showAddFormFlg &&
                                <span onClick={this.handleOnClickShowForm}>Add User</span>}</div>
                        </caption>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>FullName</th>
                            <th>BirthDay</th>
                            <th>Sex</th>
                            <th>Religion</th>
                            <th>Nationality</th>
                            <th>Corporate</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList.map((user, index) => {
                            return (
                                <tr key={user.id} >
                                    <td>{user.id}</td>
                                    <td><span
                                        onClick={() => this.handleOnClickShowFormDetail(user.id)}>{user.firstName} {user.lastName}</span>
                                    </td>
                                    <td>{user.birthDay}</td>
                                    <td>{user.sex}</td>
                                    <td>{user.religion}</td>
                                    <td>{user.nationality}</td>
                                    <td>{user.corporate}</td>
                                    <td><span
                                        onClick={() => this.handleOnClickShowFormDetail(user.id)}>📝</span> <span
                                        onClick={() => this.handleOnClickDeleteUser(user.id)}>⛔</span>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={8}>Message: Tà đạo</td>
                        </tr>
                        </tfoot>
                    </table>
                    {this.state.showAddFormFlg &&
                        <AddUserComponent title={"Add new user"}
                                          handleOnClickAddUserModel={this.handleOnClickAddUserModel}
                                          handleOnClickShowForm={this.handleOnClickShowForm}/>
                    }
                    {this.state.showDetailFormFlg &&
                        // eslint-disable-next-line array-callback-return
                        <UserFormComponent title={"User Detail"} userModel={userList.filter((item) => {
                            if (item.id === this.state.selectUserId) return item
                        })} userListData={userList}
                                           handleOnClickShowFormDetail={() => this.handleOnClickShowFormDetail(this.state.selectUserId)}
                                           handleOnClickUpdateUserModel={this.handleOnClickUpdateUserModel}/>
                    }
                </>
            }
            </>
        );
    }
}

export default UserTableComponent;