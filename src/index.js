import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReportPage from './pages/report';
import ProductsPage from './pages/products';
import OperationsPage from './pages/operations';
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
          <a href="/" style={{color:'black'}}>SALE</a>
          </button>
          <button style={{width:"25%", height:"100px"}}>
          <a href="/products" style={{color:'black'}}>PRODUCTS</a>
          </button>
          <button style={{width:"25%", height:"100px"}}>
          <a href="/reports" style={{color:'black'}}>REPORTS</a>
          </button>
          <button style={{width:"25%", height:"100px"}}>
          <a href="/operations" style={{color:'black'}}>OPERATIONS</a>
          </button>
        <Route exact path="/" component={App} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/reports" component={ReportPage} />
        <Route path="/operations" component={OperationsPage} />
      </div>
    </Router>
  )
  


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
