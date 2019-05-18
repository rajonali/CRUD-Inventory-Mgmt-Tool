const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const parseurl = require('parseurl');
const path = require('path');

const app = express();

const url = 'mongodb://127.0.0.1/data';

const routes = express.Router();

app.use(cors());
app.use(bodyParser.json());

let Schema = mongoose.Schema;
const transactionsSchema = new Schema({
    product_upc: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    product_quantity: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    transaction_total: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})
const Transactions = mongoose.model('Transactions', transactionsSchema);

const ProductSchema = require('./product.model');

var Products = mongoose.model('ProductModel', ProductSchema);

routes
    .route('/transactions')
    .get(function (req, res) {
        Transactions
            .find(function (err, products) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(products);
                }
            });
    });

routes
    .route('/products')
    .get(function (req, res) {
        Products
            .find(function (err, products) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(products);

                }
            });
    });

routes
    .route('/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Transactions.findById(id, function (err, product) {
            res.json(product);
        });
    });

routes
    .route('/update:id')
    .post(function (req, res) {
        Transactions
            .findById(req.params.id, function (err, product) {
                if (!product) 
                    res.status(404).send("data is not found");
                else 
                    product.product_upc = req.body.product_upc;
                product.product_name = req.body.product_name;
                product.total = req.body.total;

                product
                    .save()
                    .then(product => {
                        res.json('products updated!');
                    })
                    .catch(err => {
                        res
                            .status(400)
                            .send("Update not possible");
                    });
            });
    });

routes
    .route('/transactions/add')
    .post(function (req, res) {
        var awesome_instance = new Transactions(req.body);
        awesome_instance
            .save()
            .then(product => {
                res.json('products updated!');
            })
            .catch(err => {
                res
                    .status(400)
                    .send("Update not possible");
            });
    })

routes
    .route('/products/add')
    .post(function (req, res) {
        var awesome_instance = new Products(req.body);
        awesome_instance
            .save()
            .then(product => {
                res.json('products updated!');
            })
            .catch(err => {
                res
                    .status(400)
                    .send("Update not possible");
            });
    })

mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});

//==========================//

app.use('/', routes);
app.listen(7000, function () {
    console.log("Server is running on Port: " + 7000);
});
