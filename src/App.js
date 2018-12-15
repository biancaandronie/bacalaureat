import React, { Component } from 'react';
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import stele4 from './images/stele4.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={imag} className="App-logo" alt="crop1" width="1600" height="158" />
          <img src={foot} className="footer" alt="footer" width="1600" height="154" />

          <div className="menu">
            <ul>
              <li><a href="#home"><b>Home</b></a></li>
              <li><a href="#news"><b>News</b></a></li>
              <li><a href="#contact"><b>Contact</b></a></li>
              <li><a href="#about"><b>About</b></a></li>
            </ul>
          </div>

              <div className="content-right">
                <img src={stele4} className="stele" alt="stele" width="467" height="400" />
              </div>

              <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" className="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={imag} alt="Los Angeles" width="1600" height="158" />
                    <div className="carousel-caption">
                      <h3>Los Angeles</h3>
                      <p>We had such a great time in LA!</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={foot} alt="Chicago" width="1600" height="154" />
                    <div className="carousel-caption">
                      <h3>Chicago</h3>
                      <p>Thank you, Chicago!</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={foot} alt="New York" width="1600" height="154" />
                    <div className="carousel-caption">
                      <h3>New York</h3>
                      <p>We love the Big Apple!</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>

      </div>


    );
  }
}

export default App;
