import React from "react";

class User extends React.Component {
    state = {
        showData: false
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
                                    <td>{item.description}</td>
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