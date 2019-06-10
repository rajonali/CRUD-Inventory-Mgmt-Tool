import React from 'react'

const axios = require('axios');
const mongoose = require('mongoose');




class SalePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            products: [],
            product_upc: "",
            product_category: "",
            product_name: "",
            product_quantity: 0,
            transaction_total: 0,
            new_quantity: 0
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

    


    onSubmit = () => {
        const info = {
            product_upc: this.state.product_upc,
            product_quantity: this.state.new_quantity,
            product_name: this.state.product_name,
            product_category: this.state.product_category,
            product_price: this.state.product_price,
            transaction_total: this.state.transaction_total

        };

        //alert(this.state.new_quantity);
            
        
        axios.put('http://localhost:7000/products/update_quantity/' + this.refs.product_upc.value , {product_quantity: this.state.new_quantity})
            .then(res => {    
                console.log('updated qty!');
            })
            .catch(err => {
                console.log(err);
            });

        axios.post('http://localhost:7000/transactions/add', info)
            .then(res => {    
                console.log('todo added successfully');
            })
            .catch(err => {
                console.log(err);
            });



        }








    getDataFromDb = () => {
        fetch("http://localhost:7000/products")
            .then(data => data.json())
            .then(res => this.setState({products: res.data}));
    };



    onChangeUPC = (e) => {
        //console.log(e.target.value);
        axios.get('http://localhost:7000/products/'+e.target.value)
        .then(response => {

            console.log(response.data);
            var jsun = JSON.parse(JSON.stringify(response.data));
            var upc = jsun[0]['product_upc'];
            var name = jsun[0]['product_name'];
            var category = jsun[0]['product_category'];            
            var qty = jsun[0]['product_quantity'];
            var price = jsun[0]['product_price'];
            this.setState({product_upc: upc});
            this.setState({product_name: name});
            this.setState({product_category: category});
            this.setState({product_quantity: qty});
            this.setState({product_price: price});


            
        })
        .catch(function (error) {
            console.log("ERR"+error);
        }) 
    }


    onChangeQty = (e) => {
        //var newQty=(parseInt(this.state.product_quantity, 10) - parseInt(e.target.value, 10))
        //console.log(newQty);
        //console.log(this.state.product_quantity);
        var new_qty = parseInt(this.state.product_quantity, 10) - parseInt(e.target.value, 10);
        var new_transaction_total =  parseInt(this.state.product_quantity, 10) * parseInt(e.target.value, 10);
        //console.log("NEW QUANT" + new_qty);
        if (e.target.value != undefined) { 
        this.setState({
            new_quantity: new_qty,
            transaction_total: new_transaction_total
        });
    }
    };


    render() {

        let transactions = this.state.transactions;

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
                                    <pre>Name: {this.state.product_name}</pre>
                                </label><br/>
                                <label>
                                    <pre>Category: {this.state.product_category}</pre>
                                </label><br/>

                                <label>
                                    <pre>UPC: <input onChange={this.onChangeUPC.bind(this)} ref="product_upc"></input> @ ${this.state.product_price}</pre>
                                </label><br/>
                                <label>
                                    <pre>Qty: <input onChange={this.onChangeQty.bind(this)} ref="product_quantity"></input> {this.state.product_quantity} Available</pre>
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
                                            <th scope="col">Category</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {transactions.map((product => <tr>
                                            <td>{product.product_upc}</td>
                                            <td>{product.product_category}</td>
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

export default SalePage
