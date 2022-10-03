import React from "react";

class UserTableComponent extends React.Component {


    /**
     * Param userList
     * Param showFlg
     * @returns {JSX.Element}
     */
    render() {
        let {userList, showFlg} = this.props;
        // Validation data
        if (!showFlg && !userList && !Array.isArray(userList) && userList.length > 0) {
            return <span className={"aline-c"}>No data</span>
        }

        return (
            <>{showFlg &&
                <table>
                    <thead>
                    <th>
                        <td>ID</td>
                        <td>FullName</td>
                        <td>BirthDay</td>
                        <td>Sex</td>
                        <td>Religion</td>
                        <td>Nationality</td>
                        <td>Corporate</td>
                        <td>Action</td>
                    </th>
                    </thead>
                    <tbody>
                    {userList.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName} {user.lastName} </td>
                                <td>{user.birthDay}</td>
                                <td>{user.sex}</td>
                                <td>{user.religion}</td>
                                <td>{user.nationality}</td>
                                <td>{user.corporate}</td>
                                <td>📝 | ⛔</td>
                            </tr>
                        );
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={8}>Note: This is note</td>
                    </tr>
                    </tfoot>
                </table>
            }
            </>
        );
    }
}

export default UserTableComponent;