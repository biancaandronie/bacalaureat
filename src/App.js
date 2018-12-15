import React, { Component } from 'react';
import imag from './imag.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={imag} className="App-logo" alt="crop1" width="1600" height="1200" />

      </div>
    );
  }
}

export default App;
