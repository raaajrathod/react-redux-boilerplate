import React, { Fragment, useEffect } from "react";

import logo from './logo.svg';
import './App.css';


function App() {
  useEffect(() => {
    //eslint-disable-next-line
  }, []);
  return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>This app is has Redux, Store and Redux-devtools-extensions connected</p>
        </header>
      </div>
  );
}

export default App;
