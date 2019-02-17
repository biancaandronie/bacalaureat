import React, { Component } from 'react';
import './Login.css';
class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>sortie</button>
        </div>
      </div>
    );
  }
}
class Pop extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='pop'>

        <button className="purple-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1" onClick={this.togglePopup.bind(this)}>show popup</button>

        {this.state.showPopup ?
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};
export {Pop, Popup};