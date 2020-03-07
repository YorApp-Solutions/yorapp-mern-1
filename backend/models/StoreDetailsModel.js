const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeDetailsSchema = new Schema({
    assign_id: String,
    email: String,
    password: String,
    contact: Number,
    enable: Boolean,
    google_id: String,
    address: String,
    tables: Number,
    google_rating: Number,
    followers: Number,
    affiliated_members: Number,
    gold_status: Boolean,
    faq: [Object],
    imgs: [String],
});

module.exports = mongoose.model(
    'storeDetails',
    storeDetailsSchema,
    'store_details_jamshedpur'
);
