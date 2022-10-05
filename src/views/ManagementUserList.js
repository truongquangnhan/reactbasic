import React from "react";
import UserTableComponent from "../components/tables/UserTableComponent";
import UserModel from "../models/UserModel";

class ManagementUserList extends React.Component {

    render() {
        let userList = new UserModel().cloneUser(10,0);
        return (
            <>
            <div className={"management-user"}>
                <UserTableComponent userList={userList} showFlg={true} caption={"Management user"}/>
            </div>

            </>
        )
    }
}

export default ManagementUserList;