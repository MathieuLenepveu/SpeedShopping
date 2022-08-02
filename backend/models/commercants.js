const mongoose = require('mongoose');

// articles
var ArticlesSchema = mongoose.Schema({
    article : String,
    price: Number,
    quantite: Number, 
   });
 

// commercants
var commercantsSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
    password:String,
    address:String, 
    articles: [ArticlesSchema],
  });
  
var CommercantModel = mongoose.model('commercants', commercantsSchema);

module.exports = CommercantModel