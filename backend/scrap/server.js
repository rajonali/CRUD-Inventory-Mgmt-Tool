const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');



const inventoryRoutes = express.Router();


const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());



//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/products';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const ProductSchema = require('../product.model');

// Compile model from schema
var ProductModel = mongoose.model('ProductModel', ProductSchema );



inventoryRoutes.route('/').get(function(req, res) {
    ProductModel.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

inventoryRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    ProductModel.findById(id, function(err, product) {
        res.json(product);
    });
});

inventoryRoutes.route('/update:id').post(function(req, res) {
    ProductModel.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else
            product.product_upc = req.body.product_upc;
            product.product_name = req.body.product_name;
            product.product_quantity = req.body.product_quantity;
            product.product_price = req.body.product_price;
            product.save().then(product => {
                res.json('products updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

inventoryRoutes.route('/add').post(function(req, res) {
    var awesome_instance = new ProductModel(req.body);
    awesome_instance.save().then(product => {
        res.json('products updated!');
    })
    .catch(err => {
        res.status(400).send("Update not possible");
    });
    
      

});
app.use('/products', inventoryRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

