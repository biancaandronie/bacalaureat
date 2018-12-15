import React, { Component } from 'react';
import imag from './images/crop1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />

      </div>
    );
  }
}

export default App;
