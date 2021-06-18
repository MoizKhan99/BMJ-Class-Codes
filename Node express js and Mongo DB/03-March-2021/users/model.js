const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// https://www.youtube.com/watch?v=SnoAwLP1a-0

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

