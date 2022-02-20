import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("true")
    setTimeout(() => {
      console.log("timeout");
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <HashLoader color={"#9013FE"} loading={loading} size={50} />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      )}
    </div>
  );
}

export default App;
