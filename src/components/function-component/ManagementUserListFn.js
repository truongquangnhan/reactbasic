import React from "react";
import {UserTableComponentFn} from "./UserTableComponentFn";
import UserModel from "../../models/UserModel";

export const ManagementUserListFn = () => {
    let userList = new UserModel().cloneUser(10, 0);
    return (
        <>
            <div className={"management-user"}>
                <UserTableComponentFn userList={userList} showFlg={true} caption={"Management user"}/>
            </div>
        </>
    )
}