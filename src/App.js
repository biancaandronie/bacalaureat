import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import stg from './images/stg.jpg';
import dr from './images/dr.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />

          <div className="jumatate">

            <div className="stanga">
                <img src={stg} className="App-logo" alt="crop1" width="60" height="888" />
            </div>

            <div className="centru">
                <h>alb</h>
            </div>

            <div className="dreapta">
                <img src={dr} className="App-logo" alt="crop1" width="60" height="888" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
