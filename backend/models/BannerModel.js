const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StoreSchema = new Schema({
    assign_id: String,
    name: String,
    img: String,
});
const bannerSchema = new Schema({
    city: String,
    stores: [StoreSchema],
});

module.exports = mongoose.model('banner', bannerSchema, 'banner');
