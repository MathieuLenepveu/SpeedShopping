var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* RAJOUTER LE TYPE D'ENSEIGNE DANS LA BDD (BOULNGE,POISSONERIE, ETC )*/
router.post('/map', function(req, res, next) {
  var commercantAfficher = [] ;
  var user = UserModel.find({name: req.body.username}) ;

  var commercant = commercantModel.find() ;
  commercant = commercant.statut

  for (let i = 0; i < besoinUser.length; i++) {
    for (let j = 0; j < commercant.length; j++) {

      if (besoinUser[i] == commercant[j]) {

        commercantAfficher.push(commercant[j])
        
      }
    }
  }
  
  res.json( {adresse: user.adresse},commercantAfficher);
});



module.exports = router;
