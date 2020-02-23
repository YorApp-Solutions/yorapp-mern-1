const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone: { type: Number, unique: true, required: true },
    name: String,
    image: String,
    email: String,
    OTP: { type: Number, default: null },
    session_token: { type: String, default: null },
    address: String,
    registered_by: String,
    card_fee: { type: Number, default: 1000.0 },
    enable: Boolean,
    reg_date: Date,
    savings: Number,
    stores_followed: [String],
    yorcash: Number,
    loyalty_points: [],
});

module.exports = mongoose.model('user', userSchema, 'users');
