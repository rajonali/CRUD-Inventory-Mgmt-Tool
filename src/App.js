import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{
                height: '50px'
            }}>
                <p>
                    <strong>
                        Jiffy Mart Inventory Management App
                    </strong>
                </p>
            </header>
            <body style={{
                paddingTop: '10px'
            }}>
            <center>
                <button
                    style={{
                    margin: '20px',
                    height: "150px",
                    width: '90%',
                    fontSize: '50px'
                }}>
                    <strong>
                        <a href="/import">IMPORT</a>
                    </strong>
                </button>
                <button
                    style={{
                    margin: '20px',
                    height: "150px",
                    width: '90%',
                    fontSize: '50px'
                }}>
                    <strong>
                        <a href="/report">REPORT</a>
                    </strong>
                </button>
                <button
                    style={{
                    margin: '20px',
                    height: "150px",
                    width: '90%',
                    fontSize: '50px'
                }}>
                    <strong>
                        <a href="/endday">END DAY</a>
                    </strong>
                </button>
                </center>
            </body>
        </div>
    );
}

export default App;
