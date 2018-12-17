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
                                    <div className="container">
                                                     <div id="myCarousel" className="carousel slide" data-ride="carousel" style={divStyle} >

                                                       <ol className="carousel-indicators">
                                                         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                                         <li data-target="#myCarousel" data-slide-to="1"></li>
                                                         <li data-target="#myCarousel" data-slide-to="2"></li>
                                                         <li data-target="#myCarousel" data-slide-to="3"></li>
                                                       </ol>


                                                       <div className="carousel-inner">
                                                         <div className="item active">
                                                           <img src={math1} alt="math" className="poza" />
                                                           <div className="overlay">
                                                            <a href="#home" className="icon" title="User Profile">
                                                              <p>Apprendre les maths</p>
                                                            </a>
                                                          </div>
                                                         </div>

                                                         <div className="item">
                                                           <img src={chemistry1} alt="chemistry" className="poza" />
                                                           <div className="overlay">
                                                            <a href="#home" className="icon" title="User Profile">
                                                              <p>Apprendre la chimie</p>
                                                            </a>
                                                          </div>
                                                         </div>

                                                         <div className="item">
                                                           <img src={bones1} alt="bones" className="poza" />
                                                           <div className="overlay">
                                                            <a href="#home" className="icon" title="User Profile">
                                                              <p>Apprendre la biologie</p>
                                                            </a>
                                                          </div>
                                                         </div>

                                                         <div className="item">
                                                           <img src={physic1} alt="physic" className="poza" />
                                                           <div className="overlay">
                                                            <a href="#home" className="icon" title="User Profile">
                                                              <p>Apprendre la physique</p>
                                                            </a>
                                                          </div>
                                                         </div>
                                                       </div>



                                                       <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                                         <span className="glyphicon glyphicon-chevron-left"></span>
                                                         <span className="sr-only">Previous</span>
                                                       </a>
                                                       <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                                         <span className="glyphicon glyphicon-chevron-right"></span>
                                                         <span className="sr-only">Next</span>
                                                       </a>
                                                     </div>
                                                   </div>
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
