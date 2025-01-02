
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    phone:String,
    email: String,
    password: String,
    
});

module.exports = mongoose.model("Users", userSchema);
