import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';


import Sale from './pages/sale'

function App() {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{
                height: '50px'
            }}>
                    <strong>
                        Jiffy Mart Inventory Management App
                    </strong>
            </header>
            <Sale />
            
        </div>
    );
}

export default App;
