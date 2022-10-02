import logo from './logo.svg';
import './App.scss';
// eslint-disable-next-line no-unused-vars
import Example from "./example/Example";
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ẢO THẬT ĐÓ
          <Example/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
