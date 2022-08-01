const mongoose = require('mongoose');


// commande
var commandeSchema = mongoose.Schema({
    name: String,
    firstName: String,
    email: String,
    password:String,
    adress:String, 
  });
  
var commandeModel = mongoose.model('commandes', commandeSchema);

module.exports = commandeModel