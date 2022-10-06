import React, {useCallback, useEffect, useMemo, useState} from "react";
import UserModel from "../../models/UserModel";

const ShowMessage = (props) => {
    let data = {...props}
    let [message, setMessage] = useState(data.message);
    let count = 1234;
    console.log("Change?: ", message);
    let handleOnChangeMessage = useCallback((messageInput) => {
        setMessage(messageInput);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.message, message]);

    useEffect(() => {
        console.log('props changed');
        setMessage(props.message);
    }, [props]);

    useEffect(() => {
        console.log('state changed');
    }, [message]);

    console.log("Render message:", message);
    return (
        <div className={"background-dark-light text-small-5px"}>
            <p>{message}</p>
            <CustomMessage handleOnChangeMessage={handleOnChangeMessage}/>
        </div>
    );
};

export const FormAddUser = (props) => {
    let [user, setUser] = useState(props.userModel);
    let handleOnChangeUserModel = (event) => {
        let userModelCurrent = {...user};
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
        setUser(userModelCurrent);
    }

    let handleOnClickAddUser = (event) => {
        event.preventDefault();
        props.handleAddUser(user);
        setUser(new UserModel("", "", "", "", "", "", "", ""));
    }

    return (<form className={"form-user-add-2"}>
        <div>
            <div><span>firstName</span><input value={user.firstName} name={"firstName"}
                                              onChange={handleOnChangeUserModel}/></div>
            <div><span>lastName</span>
                <input value={user.lastName} name={"lastName"} onChange={handleOnChangeUserModel}/></div>
            <div><span>birthDay</span>
                <input value={user.birthDay} name={"birthDay"} onChange={handleOnChangeUserModel}/></div>
            <div><span>sex</span>
                <input value={user.sex} name={"sex"} onChange={handleOnChangeUserModel}/></div>
            <div><span>religion</span>
                <input value={user.religion} name={"religion"} onChange={handleOnChangeUserModel}/></div>
            <div><span>nationality</span>
                <input value={user.nationality} name={"nationality"} onChange={handleOnChangeUserModel}/></div>
            <div><span>corporate</span>
                <input value={user.corporate} name={"corporate"} onChange={handleOnChangeUserModel}/></div>
            <div>
                <input type={"submit"} value={"add"} onClick={handleOnClickAddUser} className={"btn btn-add-left"}/>
            </div>
        </div>
    </form>);
}

export const CustomMessage = (props) => {
    let [message, setMessage] = useState("");
    let [count, setCount] = useState(1);
    let handleOnChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    let handleOnAddMessage = (event) => {
        event.preventDefault();
        props.handleOnChangeMessage(message);
        setMessage("");
    }

    let handleOnChangeCount = (event) =>{
        count = count + 1;
        setCount(count++);
    };

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };
    // let calculation = expensiveCalculation(count);
    let calculation = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <>
            <div className={"float-left"}>
                <div>Enter message:</div>
                <div>
                    <input value={message} onChange={handleOnChangeMessage}/>
                    <input type={"button"} value={"expensiveCalculation:" + count} onClick={handleOnChangeCount}/>{calculation}
                    <input type={"submit"} value={"add"} onClick={handleOnAddMessage} className={"btn btn-add-left"}/>

                </div>
            </div>
        </>

    );

}

export const UserTableComponentFn = (props) => {
    let [state, setState] = useState({
        userModel: new UserModel("", "", "", "", "", "", "", ""),
        showAddFormFlg: false,
        showDetailFormFlg: false,
        selectUserId: "",
        userList: props.userList,
        message: ""
    });

    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const handleAddUser = (userModel) => {
        let user = new UserModel(
            getRandomInt(1000),
            userModel.firstName,
            userModel.lastName,
            userModel.birthDay,
            userModel.sex,
            userModel.religion,
            userModel.nationality,
            userModel.corporate);

        let currentState = {state};
        currentState.userList = [...state.userList, user];
        currentState.message = "Add success user: " + user.id;
        setState(currentState);
    };


    let {showFlg, caption} = props;
    // Validation data
    if (!state.userList) {
        return <span className={"aline-c"}>No data</span>
    }

    return (
        <>{showFlg &&
            <>
                <table className={"view-table"}>
                    <caption><h3>{caption}</h3>
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
                    {state.userList.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><span
                                >{user.firstName} {user.lastName}</span>
                                </td>
                                <td>{user.birthDay}</td>
                                <td>{user.sex}</td>
                                <td>{user.religion}</td>
                                <td>{user.nationality}</td>
                                <td>{user.corporate}</td>
                                <td><span>📝</span> <span>⛔</span>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div>
                    <FormAddUser handleAddUser={handleAddUser} userModel={state.userModel}/>
                    <ShowMessage message={state.message}/>
                </div>
            </>
        }
        </>
    );
}