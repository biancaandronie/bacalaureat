import React, { Component } from 'react';
import elev1 from './images/elev1.jpg';
import './Login.css';
class Popup extends Component {

constructor(props) {
    super(props);
    this.state = {
      fname: '',
      parola: ''
    }
}
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <img src={elev1} className="elev1" alt="elev1" width="254" height="191" />
                <h1 className='bienvenue'>{this.props.text}</h1>
                    <div>
                        <form action="#">
                            <input className='deep-blue-gradient' type="text" id="fname" name="firstname" placeholder="Nom d'utilisateur"
                                   value={this.state.fname }
                                   onChange={e => this.setState({ fname: e.target.value })}
                            /> <br />
                            <input className='deep-blue-gradient' type="text" id="parola" name="password" placeholder="Mot de passe"
                                   value={this.state.parola }
                                   onChange={e => this.setState({ parola: e.target.value })}
                            />
                        </form>
                    </div>
        <button id='exit' className='btn deep-blue-gradient rounded-circle' onClick={this.props.closePopup}>sortie</button>
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

        <button className="btn morpheus-den-gradient rounded-circle" onClick={this.togglePopup.bind(this)}>Le login</button>

        {this.state.showPopup ?
          <Popup
            text='Bienvenue, connectez-vous pour continuer!'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};
export {Pop, Popup};