// import dummy from '../assets/images/logo/dummy.png';
import './App.scss';
// import Example from "./example/Example";
import AddUserComponent from "../components/input/AddUserComponent";

/**
 * 1. Class component
 * 2. Function component: function| arrow
 * 2.1 function: function App (){}
 *
 * 2.2 arrow const App = () =>{}
 *
 *
 *
 */
function App() {
    return (
        <div className="App">
            {/*HEADER*/}
            <div className="App-header">
                {/*LOGO*/}
                <div className="App-logo">✈</div>
                {/*HEADER-MENU*/}
                <div className={"header-menu"}></div>
            </div>
            {/*BODY*/}
            <div className={"App-body"}>
                {/*BODY-MENU*/}
                <div></div>
                {/*BODY-CONTENT*/}
                <div><AddUserComponent/></div>
            </div>
            {/*FOOTER*/}
            <div className={"App-footer"}>
                FOOTER
            </div>
        </div>
    );
}

export default App;
