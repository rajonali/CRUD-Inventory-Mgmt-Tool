import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Report from './pages/report';
import ImportProduct from './pages/importProduct';
import EndDay from './pages/endDay';
import { Button } from 'react-bootstrap';


const routing = (
    <Router>
    <div>
    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"/>

        <button style={{width:"25%", height:"100px"}}>
          <a href="/">HOME</a>
          </button>
          <button style={{width:"25%", height:"100px"}}>
          <a href="/import">IMPORT</a>
          </button>
          <button style={{width:"25%", height:"100px"}}>
          <Link to="/report">REPORT</Link>
          </button>
          <button style={{width:"25%", height:"100px"}}>
          <Link to="/endday">END-DAY</Link>
          </button>
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
