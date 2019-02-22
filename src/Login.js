import React, { Component } from 'react';
import elev1 from './images/elev1.jpg';
import './Login.css';
import {Redirect} from 'react-router-dom';
import {PostData} from './services/PostData';

//const API_PATH = 'http://bacalaureat.local/login.php';

class Popup extends Component {

constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
}

login() {
    if(this.state.username && this.state.password){
    PostData('login',this.state).then((result) => {
    let responseJson = result;
    if(responseJson.userData){
    sessionStorage.setItem('userData',JSON.stringify(responseJson));
    this.setState({redirectToReferrer: true});
    }
    });
    }
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}

  render() {

    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
        return (<Redirect to={'/videos.php'}/>)
    }

    return (
      <div className='popup'>
        <div className='popup_inner'>
            <img src={elev1} className="elev1" alt="elev1" width="254" height="191" />
                <h1 className='bienvenue'>{this.props.text}</h1>
                     <div className="row" id="Body">
                         <div className="medium-5 columns left">
                         <h4>Login</h4>
                         <label>Username</label>
                         <input type="text" name="username" onChange={this.onChange}/>
                         <label>Password</label>
                         <input type="password" name="password" onChange={this.onChange}/>
                         <input type="submit" value="Login" onClick={this.login}/>
                         </div>
                     </div>

        <button id='exit' className='btn winter-neva-gradient rounded-circle' onClick={this.props.closePopup}>sortie</button>
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