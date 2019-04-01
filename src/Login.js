import React, { Component } from 'react';
import elev1 from './images/elev1.jpg';
import './Login.css';
import { Route, Redirect } from 'react-router'
import {PostData} from './service/PostData';
import createHistory from 'history/createBrowserHistory';

class Popup extends Component {

constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      placeholder1:'Username',
      placeholder2:'Password'
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
}

login() {
    if(this.state.username && this.state.password){
        PostData('login',this.state).then((result) => {
        let responseJson = result;
        console.log(responseJson);
        if(responseJson.userData){
            sessionStorage.setItem('userData',JSON.stringify(responseJson));
            this.setState({redirectToReferrer: true});
            console.log('Login good');
            } else {
            console.log('Login bad');
            }
        });
    }
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}

  render() {
    const { redirectToReferrer } = this.state;

if (redirectToReferrer) {
     const history = createHistory();
     history.push('/videos.php');
     history.go(0);
}


    return (
      <div className='popup'>
        <div className='popup_inner'>
            <img src={elev1} className="elev1" alt="elev1" width="254" height="191" />
                <h1 className='bienvenue'>{this.props.text}</h1>
                     <div className="row" id="Body">
                         <div className="logare">
                             <input className="w3-input w3-border" type="text" name="username" onChange={this.onChange} style={{display: 'block', marginBottom: '30px', marginTop: '30px'}} placeholder={this.state.placeholder1}/>
                             <input className="w3-input w3-border" type="password" name="password" onChange={this.onChange} style={{display: 'block', marginBottom: '30px'}} placeholder={this.state.placeholder2}/>
                             <input className='btn rainy-ashville-gradient rounded-circle' type="submit" value="Login" onClick={this.login}/>
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