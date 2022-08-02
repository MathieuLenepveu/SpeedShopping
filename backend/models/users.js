const mongoose = require('mongoose');


// user 
var userSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
    password:String,
    address:String, 
    userCommandes : [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
  });
  
var userModel = mongoose.model('users', userSchema);

module.exports = userModel