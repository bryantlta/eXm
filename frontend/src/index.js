import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Questions from './Questions';
import Display from './Display';

import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route path='/q' component={Questions}></Route>
            <Route path='/d' component={Display}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
