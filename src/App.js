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



               <div className="container">
                 <div id="myCarousel" className="carousel slide" data-ride="carousel">

                   <ol className="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                   </ol>


                   <div className="carousel-inner">
                     <div className="item active">
                       <img src={imag} alt="Los Angeles" />
                     </div>

                     <div className="item">
                       <img src={imag} alt="Chicago" />
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


    );
  }
}

export default App;
