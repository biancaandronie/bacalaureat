require('./bootstrap')
require('./components/App')
import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import ProjectsList from './components/ProjectsList';


var displayDropdown = (
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <Dropdown />
      </div>
      );

ReactDOM.render(displayDropdown, document.getElementById('app'));

//registerServiceWorker();
