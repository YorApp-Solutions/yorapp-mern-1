const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offersSchema = new Schema({
    assign_id: String,
    offer_id: String,
    valid_from: String,
    valid_to: String,
    category: String,
    short_description: String,
    description: String,
    img: String,
});

module.exports = mongoose.model('offers', offersSchema, 'offers_jamshedpur');
