import React, { Component } from 'react';
import Downshift from 'downshift'
import math1 from './images/math1.jpg';
import chemistry1 from './images/chemistry1.jpg';
import bones1 from './images/bones1.jpg';
import physic1 from './images/physic1.jpg';
import bac5 from './images/bac5.png';
import book1 from './images/book1.png';
import hitler1 from './images/hitler1.png';
import anatomy1 from './images/anatomy1.png';
import bee1 from './images/bee1.png';
import chimie1 from './images/chimie1.png';
import einstein1 from './images/einstein1.png';
import geo1 from './images/geo1.png';
import java1 from './images/java1.png';
import mate1 from './images/mate1.png';
import './App.css';


const API = 'http://bacalaureat.local/videos.php';



const divStyle = {
  position: 'absolute',
  filter: 'drop-shadow(8px 8px 10px #1E80A3)'
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
          results: [],
          placeholder:'Par exemple: physique',
        };
      }

      componentDidMount() {
          fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }));
        }

      onFocus() {
          this.setState({
              backgroundColor: 'green'
          })
        }

  render() {

  const { results } = this.state;

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
                                          <h1 className="sans-serif css-bbh5y6">Regardez les meilleurs tutoriels à apprendre pour l`examen du baccalauréat.</h1>
                                          <h2 className="sans-serif css-1e10erk">Tutoriels vidéo pour simplifier le temps de travail.</h2>
                                          <a className="sans-serif grow css-zfihb1" href="#home"><span className="lh-solid">Cliquez pour commencer à apprendre</span></a>
                                      </div>
                                       <div className="css-1pj66t4">
                                          <div className="container1">
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

              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="w3-main">

                      <div className="w3-row-padding">
                        <div className="w3-third w3-container w3-margin-bottom">
                             <img src={book1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                        <div className="w3-third w3-container w3-margin-bottom">
                          <img src={java1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                        <div className="w3-third w3-container">
                          <img src={hitler1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                      </div>


                      <div className="w3-row-padding">
                        <div className="w3-third w3-container w3-margin-bottom">
                          <img src={geo1} alt="Norway" className="w3-hover-opacity" />

                        </div>
                        <div className="w3-third w3-container w3-margin-bottom">
                          <img src={bee1} alt="Norway" className="w3-hover-opacity" />

                        </div>
                        <div className="w3-third w3-container">
                          <img src={anatomy1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                      </div>

                      <div className="w3-row-padding">
                        <div className="w3-third w3-container w3-margin-bottom">
                             <img src={chimie1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                        <div className="w3-third w3-container w3-margin-bottom">
                          <img src={einstein1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                        <div className="w3-third w3-container">
                          <img src={mate1} alt="Norway" className="w3-hover-opacity" />
                        </div>
                      </div>
                  </div>
                  </div>
                  <div className="col-sm-6 other">
                    <div className="sans-serif bibac"><h3 className=" sans-serif titlubibac">Qu`est-ce que B!BAC?</h3>
                      <p className="parag1">
                          B!bac vous propose des tutoriels vidéo concis et informatifs pour vous aider à obtenir le meilleur score à l`examen du baccalauréat.
                      </p>
                      <p className="parag2">
                          Nous nous engageons à respecter votre temps. Cela signifie que les cours vont droit au but et fournissent les connaissances que vous pouvez utiliser aujourd`hui. Vous ne trouverez pas de cours ennuyeux de 8 heures sur B!bac, mais plutôt une profusion de cours minuscules contenant plus d’informations en une fraction du temps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="notice-streamer">
                <div class="carousel-fullscreen-sidebar">
                    <div class="notice-streamer__content">
                        <div class="notice-streamer__headline">
                            Prêt à commencer?
                        </div>
                        <div class="notice-streamer__text">
                            Apprenez quelque chose de nouveau aujourd`hui. Rechercher des tutoriels.
                        </div>
                    </div>



        <Downshift

            itemToString={item => (item ? item.name : '')}
          >
            {({
              getInputProps,
              getItemProps,
              getLabelProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem,
            }) => (
              <div>

                <input {...getInputProps({style: {width: '345px'}})} placeholder={this.state.placeholder} onFocus={ () => this.onFocus() } />
                {isOpen ? (
                  <div>
                    {results
                      .filter(item => !inputValue || item.name.includes(inputValue))
                      .map((item, index) => (
                        <div
                          {...getItemProps({
                            key: item.name,
                            index,
                            item,
                            style: {
                              backgroundColor:
                                highlightedIndex === index ? 'lightgray' : 'white',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                              width: '345px',
                              margin: '7px 0 0 0',
                            },
                          })}
                        >

                                      <a href={item.link}>{item.name}</a>

                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            )}
          </Downshift>
                </div>
            </div>

          </div>

    );
  }
}

export default App;
