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

              <div>
                  <div className="carousel">
                      <ul className="slides">
                          <input type="radio" name="radio-buttons" id="img-1" checked />
                          <li className="slide-container">
                              <div className="slide-image">
                                  <img src={imag} />
                              </div>
                              <div className="carousel-controls">
                                  <label for="img-3" className="prev-slide">
                                      <span>&lsaquo;</span>
                                  </label>
                                  <label for="img-2" className="next-slide">
                                    <span>&rsaquo;</span>
                                  </label>
                              </div>
                          </li>
                          <input type="radio" name="radio-buttons" id="img-2" />
                          <li className="slide-container">
                              <div className="slide-image">
                                  <img src={imag} />
                              </div>
                              <div className="carousel-controls">
                                  <label for="img-1" className="prev-slide">
                                      <span>&lsaquo;</span>
                                  </label>
                                  <label for="img-3" className="next-slide">
                                      <span>&rsaquo;</span>
                                  </label>
                              </div>
                          </li>
                          <input type="radio" name="radio-buttons" id="img-3" />
                          <li className="slide-container">
                              <div className="slide-image">
                                  <img src={imag} />
                              </div>
                              <div className="carousel-controls">
                                  <label for="img-2" className="prev-slide">
                                      <span>&lsaquo;</span>
                                  </label>
                                  <label for="img-1" className="next-slide">
                                      <span>&rsaquo;</span>
                                  </label>
                              </div>
                          </li>
                          <div className="carousel-dots">
                              <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
                              <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
                              <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
                          </div>
                      </ul>
                  </div>
              </div>


      </div>


    );
  }
}

export default App;
