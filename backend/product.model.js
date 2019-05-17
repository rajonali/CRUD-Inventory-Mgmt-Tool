const mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    product_upc: String,
    product_quantity: String,
    product_price: String
    });

module.exports = SomeModelSchema;