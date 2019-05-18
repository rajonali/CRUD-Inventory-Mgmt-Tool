const mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var TransactionModelSchema = new Schema({
    product_upc: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      product_quantity: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      transaction_total: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      }
    })
    
module.exports = mongoose.model('Transaction', TransactionModelSchema);;