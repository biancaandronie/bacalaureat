import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import stele4 from './images/stele4.jpg';
import math1 from './images/math1.jpg';
import chemistry1 from './images/chemistry1.jpg';
import bones1 from './images/bones1.jpg';
import physic1 from './images/physic1.jpg';
import bac5 from './images/bac5.png';
import giful2 from './images/giful2.gif';
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

        <div className="flex flex-column items-stretch bg-base-secondary">
            <div>
                <div>
                      <div>
                          <section className="css-1c0ecgf">
                             <div className="css-pzqzmn">
                                <div className="css-17mv9vi">
                                    <h1 className="sans-serif css-bbh5y6">Learn the best JavaScript tools and frameworks from industry pros.</h1>
                                    <h2 className="sans-serif css-1e10erk">Video tutorials pt badass web developers.</h2>
                                    <a className="sans-serif grow css-zfihb1" href="#"><span className="lh-solid">Click to Start Learning</span></a>
                                </div>
                                 <div className="css-1pj66t4">
                                    <a className="grow" href="#" aria-label="CSS Selectors in Depth"><img src={giful2} alt="giful2" className="css-1shomd3" /></a>
                                 </div>
                             </div>
                          </section>
                      </div>
                </div>
            </div>
        </div>

      </div>


    );
  }
}

export default App;
