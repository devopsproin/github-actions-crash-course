import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Tutorial"} - By
          DevOps_Pro Ganesh sanap !!!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCX-YG3i-PgGHHToD7b2kCvg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
