import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />


          <footer>
            <img src={foot} className="App-logo" alt="crop1" width="1600" height="154" />
          </footer>
      </div>


    );
  }
}

export default App;
