import React from 'react';

const axios = require('axios');

class ImportProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product_upc: "",
            product_price: "",
            product_quantity: ""
        };
        this.onSubmit = this
            .onSubmit
            .bind(this);

    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/products/')
            .then(response => {
                this.setState({products: response.data});
                console.log(this.state.products)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onSubmit = () => {
        const info = {
            "product_upc": this.refs.product_upc.value,
            "product_quantity": this.refs.product_quantity.value,
            "product_price": this.refs.product_price.value
        };

        axios
            .post('http://localhost:4000/products/add', info)
            .then(res => {
                console.log('POSTRESULTSDATA:' + res.data);
                //console.log(JSON.stringify(info))
            })
            .catch(function (error) {
                console.log(error);
            })

    };

    render() {
        let products = this.state.products

        return (
            <div>
<center>
                <header
                    className="App-header"
                    style={{
                    height: '50px'
                }}>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"/>

                    <strong>
                        Import Product
                    </strong>
                </header>
                <div>
                    <br/>
                    <React.Fragment>
                        <form>
                        <center>

                            <div>
                                <label>
                                <pre>
                                UPC:
                                <input
                                        type="text"
                                        placeholder="UPC"
                                        ref="product_upc"/>
                                </pre>

                                </label> 
                                <br />
                                <label>
                                <pre>
                                Qty: 
                                <input
                                        type="text"
                                        placeholder="quantity"
                                        ref="product_quantity"/>

                                </pre>

                                </label> 
                                <br />

                                <label>
                                <pre>
                                Price: 
                                <input
                                        type="text"
                                        placeholder="price"
                                        ref="product_price"/>

                                </pre>

                                </label> 
                                                                

                            </div>
                            <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Save Product
                            </button>
                            </center>

                        </form>

                    </React.Fragment>
                    <div>
                        <table
                            className="table table-striped"
                            style={{
                            marginTop: '20px'
                        }}>

                            <thead>
                                <tr>
                                    <th scope="col">UPC</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product => <tr>
                                    <td>{product.product_upc}</td>
                                    <td>{product.product_quantity}</td>
                                    <td>{product.product_price}</td>
                                </tr>))}
                            </tbody>
                        </table>

                    </div>
                </div>
                </center>
            </div>
        );
    }
}
export default ImportProduct
