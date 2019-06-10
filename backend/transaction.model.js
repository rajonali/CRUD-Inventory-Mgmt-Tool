const mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var TransactionModelSchema = new Schema({
    product_upc: {
        type: mongoose.Schema.Types.Mixed,
      },
      product_name: {
        type: mongoose.Schema.Types.Mixed,
      },
      product_category: {
        type: mongoose.Schema.Types.Mixed,
      },
      
      product_quantity: {
        type: mongoose.Schema.Types.Mixed,
      },
      transaction_total: {
        type: mongoose.Schema.Types.Mixed,
      }
    })
    
module.exports = mongoose.model('Transaction', TransactionModelSchema);;