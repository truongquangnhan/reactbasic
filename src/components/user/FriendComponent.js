import React from "react";

export const PrintFriends = (props)=>{
    let getOldText = (old) => {
        let oldText = old;
        if (old > 100) {
            oldText = "Cụ sống khỏe vl";
        } else if (old < 1) {
            oldText = "Chưa đẻ.";
        }
        return oldText
    }

    return (<>
            <tbody className={"background-dark-light"}>
            <tr>
                <td>Name:</td>
                <td>{props.userInfo.name}</td>
            </tr>
            <tr>
                <td>Old:</td>
                <td>{getOldText(props.userInfo.old)}</td>
            </tr>
            <tr>
                <td>Description:</td>
                <td>{props.userInfo.description}</td>
            </tr>
            <tr>
                <td>Corporation:</td>
                <td>{props.userInfo.corporation}</td>
            </tr>
            </tbody>

            {props.friends.map((item, index) => {
                return (
                    <tbody key={item.id}>
                    <tr>
                        <td>Name:</td>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <td>Old:</td>
                        <td>{getOldText(item.old)}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{item.description}</td>
                    </tr>
                    </tbody>
                );
            })}
        </>
    );
}

export const PrintFriend = (props)=>{
    let getOldText = (old) => {
        let oldText = old;
        if (old > 100) {
            oldText = "Cụ sống khỏe vl";
        } else if (old < 1) {
            oldText = "Chưa đẻ.";
        }
        return oldText
    }

    return (<>
            <tbody className={"background-dark-light"}>
            <tr>
                <td>Name:</td>
                <td>{props.userInfo.name}</td>
            </tr>
            <tr>
                <td>Old:</td>
                <td>{getOldText(props.userInfo.old)}</td>
            </tr>
            <tr>
                <td>Description:</td>
                <td>{props.userInfo.description}</td>
            </tr>
            <tr>
                <td>Corporation:</td>
                <td>{props.userInfo.corporation}</td>
            </tr>
            </tbody>

            {props.friends.map((item, index) => {
                return (
                    <tbody key={item.id}>
                    <tr>
                        <td>Name:</td>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <td>Old:</td>
                        <td>{getOldText(item.old)}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{item.description}</td>
                    </tr>
                    </tbody>
                );
            })}
        </>
    );
}