import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Report from './pages/report';
import ImportProduct from './pages/importProduct';
import EndDay from './pages/endDay';


const routing = (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/import">Import</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
        <li>
          <Link to="/endday">End-Day</Link>
        </li>

      </ul>
        <Route exact path="/" component={App} />
        <Route path="/import" component={ImportProduct} />
        <Route path="/report" component={Report} />
        <Route path="/endday" component={EndDay} />
      </div>
    </Router>
  )
  


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
