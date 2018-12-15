import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />

         <div className="content"  height="888">
           <h1>centru</h1>
         </div>

          <div className="footer">
            <img src={foot} className="App-logo" alt="crop1" width="1600" height="154" />
          </div>
      </div>


    );
  }
}

export default App;
