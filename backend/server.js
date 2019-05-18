const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const parseurl = require('parseurl');
const path = require('path');

const app = express();

const url = 'mongodb://127.0.0.1/data';
const MongoClient = require('mongodb').MongoClient

const routes = express.Router();

app.use(cors());
app.use(bodyParser.json());

const Transactions = require('./transaction.model');

const Products = require('./product.model');

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
    .route('/transactions/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Transactions.findById(id, function (err, product) {
            res.json(product);
        });
    });

routes
    .route('/transactions/update:id')
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

routes
    .route('/products/:upc')
    .get(function (req, res) {
        Products.find({product_upc:'4567'}, function(err, obj) { res.json(obj); }).select({ "product_price": 1, "_id": 0});
        })

routes
    .route('/products/update:id')
    .post(function (req, res) {
        Products
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

mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});

//==========================//

app.use('/', routes);

var db
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Connection established to', url);
        db = client.db('products')
        app.listen(7000, () => {
            console.log('listening on 7000')
        })
    }
});
