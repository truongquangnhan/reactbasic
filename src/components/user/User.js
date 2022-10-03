import React from "react";

class User extends React.Component {
    getOld = (old) => {
        let oldText = old;
        if (old > 100) {
            oldText = "Cụ sống khỏe vl";
        } else if (old < 1) {
            oldText = "Chưa đẻ.";
        }
        return oldText
    }

    render() {
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
                </tbody>

                {this.props.friends.map((item, index) => {
                    return (
                        <tbody key={item.id}>
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
                        </tbody>
                    );
                })}
            </>
        )
    }
}

export default User;