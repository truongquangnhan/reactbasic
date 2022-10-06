import React from "react";
import {
    NavLink
} from "react-router-dom";

export const Navication = () => {

    return (<>
        <nav>
            <div className="nav">
                <table>
                    <thead>
                    <tr>
                        <th><NavLink to="/" activeClassName={"active-nav"} exact={true}>HOME</NavLink></th>
                        <th><NavLink to="/users" activeClassName={"active"}>MANAGEMENT</NavLink></th>
                        <th><NavLink to={"/page2"} activeClassName={"active-nav"}>PAGE2</NavLink></th>
                        <th><NavLink to={"/page3"} activeClassName={"active-nav"}>PAGE3</NavLink></th>
                        <th><NavLink to={"/page4"} activeClassName={"active-nav"}>PAGE4</NavLink></th>
                    </tr>
                    </thead>
                </table>
            </div>
        </nav>
    </>);
}