import './App.scss';
import ManagementUserList from "./ManagementUserList";
import {Navication} from "../components/function-component/nav/Navication";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Home, Page2, Page3, Page4} from "./Home";

function App() {
    return (
        <div className="App">
            <Router>
                {/*HEADER*/}
                <div className="App-header">
                    {/*LOGO*/}
                    <div className="App-logo-2">🪂
                        <div className="App-logo">
                            <div className="App-logo">
                                <div className="App-logo">🪂</div>
                            </div>
                            <div className="App-logo">🚀</div>
                        </div>
                        ✈
                    </div>
                    {/*HEADER-MENU*/}
                    <div className={"header-menu"}>
                        <Navication/>
                    </div>
                </div>
                {/*BODY*/}
                <div className={"App-body"}>
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/users">
                            <ManagementUserList/>
                        </Route>
                        <Route path="/page2">
                            <Page2/>
                        </Route>
                        <Route path="/page3">
                            <Page3/>
                        </Route>
                        <Route path="/page4">
                            <Page4/>
                        </Route>
                    </Switch>
                </div>
                {/*FOOTER*/}
                <div className={"App-footer"}>
                    FOOTER
                </div>
            </Router>
        </div>
    );
}

export default App;
