const mongoose = require('mongoose');

// articles
var ArticlesSchema = mongoose.Schema({
    article : String,
    price: Number,
    quantite: Number, 
   });
 
// heures d'ouverture

var HoursSchema = mongoose.Schema({
    Dayclosed: String,
    HeuresOuverts: Number,
    Heuresfermes: Number, 
   });

// commercants
var commercantSchema = mongoose.Schema({
    name: String,
    firstName: String,
    enseignecommerciale: String, 
    type: String,
    email: String,
    password:String,
    address:String, 
    articles: [ArticlesSchema],
    hours: [HoursSchema], 
  });
  
var CommercantModel = mongoose.model('commercants', commercantSchema);

module.exports = CommercantModel