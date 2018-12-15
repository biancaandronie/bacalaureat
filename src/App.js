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

          <div className="menu">
            <ul>
              <li><a href="#home"><b>Home</b></a></li>
              <li><a href="#news"><b>News</b></a></li>
              <li><a href="#contact"><b>Contact</b></a></li>
              <li><a href="#about"><b>About</b></a></li>
            </ul>
          </div>

      </div>


    );
  }
}

export default App;
