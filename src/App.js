import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import stele4 from './images/stele4.jpg';
import math1 from './images/math1.jpg';
import chemistry1 from './images/chemistry1.jpg';
import bones1 from './images/bones1.jpg';
import physic1 from './images/physic1.jpg';
import bac5 from './images/bac5.png';
import './App.css';

const divStyle = {
  position: 'fixed'
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={bac5} className="bac" alt="bac" width="254" height="109" />
        </div>

        <div className="gri">

            <div className="scris">
                <p className="invata">Learn the best JavaScript tools and frameworks from industry pros.</p>
                <a className="sans-serif grow css-zfihb1" href="/browse"><span className="lh-solid">Click to Start Learning</span></a>
            </div>

        </div>

      </div>


    );
  }
}

export default App;
