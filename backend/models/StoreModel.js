const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storesSchema = new Schema({
    assign_id: String,
    name: String,
    category: String,
    logo: String,
    enable: Boolean,
    offers: [String],
});

module.exports = mongoose.model('store', storesSchema, 'stores_jamshedpur');
