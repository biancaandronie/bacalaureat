import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />

        <div align="center" style="width:100%; height:auto;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="App-logo">
        <tr>
        <td>
         <img src={imag} alt="Girl in a jacket">
        </td>
        <td>
         <h1>aaa</h1>
        </td>
        </tr>
        </table>
        </div>

    );
  }
}

export default App;
