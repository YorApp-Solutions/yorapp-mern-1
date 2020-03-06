const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    assign_id: String,
    name: String,
    img: String,
    category: String,
});
const yorStoreOfTheDaySchema = new Schema({
    city: String,
    all: [storeSchema],
    restaurant: [storeSchema],
    salon: [storeSchema],
    hangouts: [storeSchema],
    fashion: [storeSchema],
});

module.exports = mongoose.model(
    'yorstoreoftheday',
    yorStoreOfTheDaySchema,
    'yorstoreoftheday'
);
