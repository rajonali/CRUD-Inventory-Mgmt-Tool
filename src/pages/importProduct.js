import React from 'react'

class ImportProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    handleChange = event => {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div>
                <header>
                    <h1>Import Product</h1>
                </header>
                <body>
                    <React.Fragment>
                        <form>
                            <label htmlFor="product_upc">Product UPC</label>
                            < br/>
                            <input
                                type="text"
                                name="product_upc"
                                value={this.state.product_upc}
                                onChange={this.handleChange}/>
< br/>
                            <label htmlFor="product_quantity">Product Quantity</label>
                            < br/>
                            <input
                                type="text"
                                name="product_quantity"
                                value={this.state.product_quantity}
                                onChange={this.handleChange}/>
< br/>
                            <label htmlFor="product_price">Product Price</label>
                            < br/>
                            <input
                                type="text"
                                name="product_price"
                                value={this.state.product_price}
                                onChange={this.handleChange}/>

                        </form>

                    </React.Fragment>
                </body>
            </div>
        );
    }
}
export default ImportProduct
