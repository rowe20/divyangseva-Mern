const mongoose = require("mongoose");

//user's schema
const userSchema = mongoose.Schema({
    uname : String,
    email : String,
    password : String,
    phone_no : String
});

const userModel = mongoose.model("userData",userSchema,"userData");

module.exports = userModel;