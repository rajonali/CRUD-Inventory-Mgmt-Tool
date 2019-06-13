const mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var ProductModelSchema = new Schema({
    product_upc: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      product_name: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      product_category: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      product_quantity: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      product_price: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      quantity_sold: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      min_stock_qty: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      order_qty: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      order_subtotal: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      },
      place_order: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
      }
    })
    
module.exports = mongoose.model('Product', ProductModelSchema);
