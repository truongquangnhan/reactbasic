// import dummy from '../assets/images/logo/dummy.png';
import './App.scss';
// import Example from "./example/Example";
import UserComponent from "../components/input/UserComponent";

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
            <header className="App-header">
                <div className="App-logo">
                    ༼ つ ◕_◕ ༽つ
                </div>
                <UserComponent/>
                {/*<img src={dummy} alt="logo"/>*/}
                {/*<Example user="xxx" test={"yyy"}/>*/}
                {/*<p>END</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    THIS TEXT*/}
                {/*</a>*/}
            </header>
        </div>
    );
}

export default App;
