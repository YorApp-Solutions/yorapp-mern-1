const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const yorStoreSchema = new Schema({
    name: String,
    category: String,
    assign_id: String,
    logo: String,
});

module.exports = mongoose.model('yorstore', yorStoreSchema, 'yorstore');
