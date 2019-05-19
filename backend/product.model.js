const mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var ProductModelSchema = new Schema({
    product_upc: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      product_name: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      product_category: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      product_quantity: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      product_price: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      }
    })
    
module.exports = mongoose.model('Product', ProductModelSchema);
