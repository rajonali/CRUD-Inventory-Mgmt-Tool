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
app.use(bodyParser.urlencoded({extended: true}));
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

///////////

routes
    .route('/products/:id')
    .get(function (req, res) {
        Products.find({
            "_id": req.params.id
        }, function (err, obj) {
            res.json(obj);
        })
            .select({"product_price": 1, "product_upc" : 1, "product_name": 1, "product_category": 1, "product_quantity": 1, "_id": 0})
            .then(product => {
                res.send(product);
            })
            .catch(err => {
                res
                    .status(400)
                    .send("Update not possible");
            });
    })

routes
    .route('/products/update/:id')
    .put(function (req, res) {

        Products
            .find(function (err, products) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(products);

                }
            });

        var product_name = products.product_name;
        var product_category = products.product_category;
        var product_price = products.product_price;
        var product_quantity = products.product_quantity;
        var product_upc = products.product_upc;

        var id = req.params.id;

        Products.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                product_name: req.body.product_name,
                product_quantity: req.body.product_quantity,
                product_upc: req.body.product_upc,
                product_category: req.body.product_category,
                product_price: req.body.product_price
            }
        }, {new: true}).then((docs) => {
            res.send(docs);
        })
    })

//Update price
//TODO: Put filter to avoid null set variables.

{/*

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

*/
}
routes
    .route('/products/update_quantity/:id')
    .put(function (req, res) {

        var id = req.params.id;

        Products.findOneAndUpdate({
            "_id": id
        }, {
            $set: {
                product_quantity: req.body.product_quantity

            }
        }, {new: true}).then((docs) => {
            res.send(docs);
        })
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
