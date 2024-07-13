import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am learning {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Tutorial"} okk.
        </p>
      </header>
    </div>
  );
}

export default App;
