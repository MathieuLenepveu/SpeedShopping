const mongoose = require('mongoose');


// user 
var userSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
    password:String,
    address:String, 
    phonenumer: Number,
    besoin:Array, 
    userCommandes : [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
  });
  
var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel