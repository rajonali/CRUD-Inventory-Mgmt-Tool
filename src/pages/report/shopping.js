import React from 'react'

const axios = require('axios');


class ShoppingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { shoppingList : [] };

    }


    getDataFromDb = () => {
        axios
        .get('http://localhost:7000/shopping/list')
        .then(response => {
            this.setState({shoppingList:response.data});
            //console.log(this.state.shoppingList);
        })
        .catch(function (error) {
            console.log("ERR NO PRODUCTS FOUND" + error);
        })     

    };




    componentDidMount() {
        this.getDataFromDb();
    }

    componentWillUnmount()
    {
    }

    render() {

        
        return (
            <div>
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
                        SHOPPING LIST
                    </strong>
                </header>
                <body style={{
                    marginTop: '50px'
                }}>


<table class="table">
                                    <thead>

                                        <tr>
                                            <th scope="col">UPC</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Min. Qty</th>

                                        </tr>
                                    </thead>
                                    <tbody>


                                    {this.state.shoppingList.map((item, index) => (
        <tr>
        <td>{item.product_upc}</td>
        <td>{item.product_category}</td>
        <td>{item.product_name}</td>
        <td>{item.product_quantity}</td>
        <td>{item.min_stock_qty}</td>
        <td>{item.transaction_total}</td>
        </tr>
    ))}



                                

                                    </tbody>
                                </table>




                </body>
            </div>
        )
    }
}

export default ShoppingPage;
