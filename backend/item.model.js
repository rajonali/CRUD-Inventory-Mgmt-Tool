const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Item = new Schema({
    item_upc: {
        type: String
    },
    item_name: {
        type: String
    },
    item_quantity: {
        type: String
    },
    item_price: {
        type: String
    }
});

module.exports = mongoose.model('items', Item);