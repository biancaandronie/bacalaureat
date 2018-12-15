import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />
          <img src={foot} className="footer" alt="crop1" width="1600" height="154" />

      </div>


    );
  }
}

export default App;
