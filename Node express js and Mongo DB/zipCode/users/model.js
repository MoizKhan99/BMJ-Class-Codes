const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    isVerified: Boolean,
    createdAt: Date
})

const userModel = mongoose.model('Users', userSchema);

//
module.exports = userModel;

