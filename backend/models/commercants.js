const mongoose = require('mongoose');

// articles
var ArticlesSchema = mongoose.Schema({
    article : String,
    price: Number,
   });
 

// commercants
var commercantsSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
    password:String,
    adress:String, 
    articles: [ArticlesSchema],
  });
  
var commercantModel = mongoose.model('commercants', commercantsSchema);

module.exports = commercantModel