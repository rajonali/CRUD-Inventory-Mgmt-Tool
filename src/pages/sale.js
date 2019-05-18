import React from 'react'

const axios = require('axios');
const mongoose = require('mongoose');




class Sale extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            products: [],
            product_upc: "",
            product_price: 0.00,
            product_type: "",
            product_name: "",
            product_quantity: 0,
            transaction_total: 0
        };
        this.onSubmit = this
            .onSubmit
            .bind(this);

    }

    componentDidMount() {
        axios
            .get('http://localhost:7000/transactions/')
            .then(response => {
                this.setState({transactions: response.data});

            })
            .catch(function (error) {
                console.log(error);
            }) 
        axios
            .get('http://localhost:7000/products/')
            .then(response => {
                this.setState({products: response.data});

            })
            .catch(function (error) {
                console.log(error);
            })

    }

    addTotal = (e) => {
        this.setState({
            transaction_total: (this.state.product_price * e.target.value)
        });
    }

    onSubmit = () => {
        const info = {
            product_upc: this.refs.product_upc.value,
            product_quantity: this.refs.product_qty.value,
            transaction_total: this.state.transaction_total
        };
        console.log(info);
        axios
            .post('http://localhost:7000/transactions/add', info)
            .then(res => {
                console.log('POSTRESULTSDATA:' + res.data);
                //console.log(JSON.stringify(info))
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    getDataFromDb = () => {
        fetch("http://localhost:7000/products")
            .then(data => data.json())
            .then(res => this.setState({products: res.data}));
    };

    onChangeUPC = (e) => {
        axios
        .get('http://localhost:7000/products/'+e.target.value)
        .then(response => {
            var jsun = JSON.parse(JSON.stringify(response.data));
            var qty = jsun[0]['product_quantity'];
            var price = jsun[0]['product_price'];
            this.setState({product_quantity: qty});
            this.setState({product_price: price});


            
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }

    render() {

        let transactions = this.state.transactions

        return (
            <div>
                <body style={{
                    paddingTop: '10px'
                }}>
                    <React.Fragment>

                        <center>

                            <br/>
                            <h3>
                                <strong>Enter Sale:</strong>
                            </h3><br/>
                            <div style={{}}>
                                <label>
                                    <pre>UPC: <input onChange={this.onChangeUPC.bind(this)} ref="product_upc"></input> @ ${this.state.product_price}</pre>
                                </label><br/>
                                <label>
                                    <pre>Qty: <input onChange={this.addTotal.bind(this)} ref="product_qty"></input> {this.state.product_quantity} Available</pre>
                                </label><br/>
                            </div>
                            <label>TOTAL:</label>
                            <h3 ref="transaction_total">
                                <strong>
                                    ${this.state.transaction_total}
                                </strong>
                            </h3><br/>
                            <button
                                onClick={this
                                .onSubmit
                                .bind(this)}
                                style={{
                                height: '100px',
                                width: '500px'
                            }}>
                                <h3>
                                    <strong>Enter Sale</strong>
                                </h3>
                            </button>
                            <br/>

                            <div class="col">
                                <table class="table">
                                    <thead>
                                        <br/><br/><br/>
                                        <h3>
                                            <strong>Transaction Log:</strong>
                                        </h3><br/>

                                        <tr>
                                            <th scope="col">UPC</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {transactions.map((product => <tr>
                                            <td>{product.product_upc}</td>
                                            <td>{product.product_type}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_quantity}</td>
                                            <td>{product.transaction_total}</td>
                                        </tr>))}

                                    </tbody>
                                </table>
                            </div>

                        </center>
                    </React.Fragment>

                </body>
            </div>
        )
    }
}

export default Sale
