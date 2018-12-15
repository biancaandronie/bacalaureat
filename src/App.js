import React, { Component } from 'react';
import imag from './imag.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={imag} className="App-logo" alt="crop1" />
        </header>
      </div>
    );
  }
}

export default App;
