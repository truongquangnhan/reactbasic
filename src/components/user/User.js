import React from "react";

class User extends React.Component {
    state = {
        showData: false,
        userInfo: {
            name: "Nhan",
            description: "dex",
            old: "30",
        }
    }

    getOld = (old) => {
        let oldText = old;
        if (old > 100) {
            oldText = "Cụ sống khỏe đấy";
        } else if (old < 1) {
            oldText = "Chưa đẻ";
        }
        return oldText
    }

    handleOnClickShowData = () => {
        this.setState({
            showData: !this.state.showData
        });
    }
    handleOnShowConsole = () => {
        this.props.handleConsole(this.state.userInfo)
    }

    handleOnclickDeleteUser = (id) => {
        this.props.handleOnclickDeleteUser(id)
    }
    handleOnclickClone =(user) =>{
        this.props.handleOnclickClone(user);
    }

    render() {
        let {showData} = this.state;
        return (<>
                <tbody className={"background-dark-light"}>
                <tr>
                    <td>Name:</td>
                    <td>{this.props.userInfo.name}</td>
                </tr>
                <tr>
                    <td>Old:</td>
                    <td>{this.getOld(this.props.userInfo.old)}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{this.props.userInfo.description}</td>
                </tr>
                <tr>
                    <td>Corporation:</td>
                    <td>{this.props.userInfo.corporation}</td>
                </tr>
                <tr>
                    <td colSpan={2}><input type={"button"} value={showData ? "Hide friend" : "Show friend"}
                                           onClick={this.handleOnClickShowData}/>
                    </td>
                </tr>
                </tbody>
                {this.props.userList && this.props.userList.map((item, index) => {
                    return (<tbody key={item.id} className={"background-dark-light"}>
                        {showData &&
                            <>
                                <tr>
                                    <td>Name:</td>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <td>Old:</td>
                                    <td>{this.getOld(item.old)}</td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>{item.description} <span onClick={() => this.handleOnclickDeleteUser(item.id)}
                                                                 data-userid={item.id}>[xóa]</span> <span onClick={() => this.handleOnclickClone(item)}>[clone]</span>
                                    </td>
                                </tr>
                            </>}
                        </tbody>
                    );
                })}
            </>
        )
    }
}

export default User;