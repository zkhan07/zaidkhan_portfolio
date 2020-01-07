import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from "./Page1"

function App() {
  return (
    <div className="App">
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
          Learn React zaid khan
        </a>
      </header>

    

      <Page1 />

      <br/><br/>
      <a href="/home">
      <button className="ui red button">Next Page</button>
      </a>
      <br/><br/>
      
    </div>
  );
}

export default App;
