const mongoose = require('mongoose');


// user 
var userSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
    password:String,
    adress:String, 
  });
  
var userModel = mongoose.model('users', userSchema);

module.exports = userModel