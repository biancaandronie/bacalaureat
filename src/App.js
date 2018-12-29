import React, { Component } from 'react';
import {render} from 'react-dom'
import Downshift from 'downshift'
import imag from './images/crop1.jpg';
import foot from './images/foot.jpg';
import stele4 from './images/stele4.jpg';
import math1 from './images/math1.jpg';
import chemistry1 from './images/chemistry1.jpg';
import bones1 from './images/bones1.jpg';
import physic1 from './images/physic1.jpg';
import bac5 from './images/bac5.png';
import giful2 from './images/giful2.gif';
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


const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';



const divStyle = {
  position: 'absolute',
  filter: 'drop-shadow(8px 8px 10px #1E80A3)'
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
          hits: [],
        };
      }

      componentDidMount() {
          fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }));
        }

  render() {

  const { hits } = this.state;
    return (
      <div className="App">

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
                <label {...getLabelProps()}>Enter a fruit</label>
                <input {...getInputProps()} />
                {isOpen ? (
                  <div>
                    {hits
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
                            },
                          })}
                        >
                          <ul>
                                  {hits.map(hit =>
                                    <li key={hit.objectID}>
                                      <a href={hit.url}>{hit.title}</a>
                                    </li>
                                  )}
                                </ul>
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            )}
          </Downshift>


          </div>

    );
  }
}

export default App;
