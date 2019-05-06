import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import * as serviceWorker from './serviceWorker';
//pt butonul din header--pt culoare am instalat mdbreact
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Videos from './Videos';
import {Switch, Route} from 'react-router';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <div>
                    <Route path="/" exact strict component={App} />
                    <Route path="/admin" exact strict component={Admin} />
                    <Route path={"/videos/" + sessionStorage.getItem('id')} exact strict component={Videos} />
                </div>
            </Switch>
        </BrowserRouter >
    ), document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
