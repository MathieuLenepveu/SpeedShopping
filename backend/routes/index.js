var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var userModel = require('../models/users')
var commercantModel = require('../models/commercants')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/mycommandes', async function(req, res, next) {

 

  var user = await userModel.findById(req.session.user._id)
  var commandes = user.populate('articles')


 res.render('mycommandes', { title: 'Express', commandes:commandes });
  
});

/* Post Sign-in */
router.post('/sign-in', async function(req, res, next) {

   //console.log(' /sign-In : result from the front -->',req.body)

  var user = await userModel.find({ email: req.body.signInEmail, password: req.body.signInPassword })
  if(user.length > 0){

    //console.log(' /sign IN : We do have a user with this email')

    // Session
    req.session.user = user[0]

    // We can render the next page 
    res.render('index', {user:req.session.user });

  }else{

    //console.log(' /Sign IN : We dont have a user with this email, so he needs to sign-up first')

    // We can render the next page 
    res.render('login', {alertMessage:'You need to sign-up first' });
    
  }
  
});

/* Post Sign-in */
router.post('/sign-up', async function(req, res, next) {

  // console.log(' /Sign-Up : result from the front -->',req.body)

  var user = await userModel.find({ email: req.body.signUpEmail })
  
  if(user.length > 0){

    //console.log('We already have a user with this email')

    // Session
    req.session.user = user

    // We can render the next page 
    res.render('index', { title: 'Express',user:req.session.user });

  }else{

    //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')

    var newUser = new userModel ({
      name: req.body.signUpName, 
      firstName: req.body.signUpFirstName, 
      password: req.body.signUpPassword, 
      address: req.body.signUpAddress, 
      email: req.body.signUpEmail, 
    });

    await newUser.save()

    //console.log(' /Sign-UP : Our new user -->',newUser)

    // Session
    req.session.user = newUser

    // We can render the next page 
    res.render('index', {user: req.session.user});
    
  }  
});

router.put('/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    var user = await userModel.find({ email: req.body.signUpEmail })
    
    if(user.length > 0){
  
      //console.log('We already have a user with this email')
  
      // Session
      req.session.user = user
  
      // We can render the next page 
      res.render('index', { title: 'Express',user:req.session.user });
  
    }else{
  
      //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')
  
      var newUser = new userModel ({
        name: req.body.signUpName, 
        firstName: req.body.signUpFirstName, 
        password: req.body.signUpPassword, 
        address: req.body.signUpAddress, 
        email: req.body.signUpEmail, 
      });
  
      await newUser.save()
  
      //console.log(' /Sign-UP : Our new user -->',newUser)
  
      // Session
      req.session.user = newUser
  
      // We can render the next page 
      res.render('index', {user: req.session.user});
      
    }  
  });

  router.post('commercants/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    var commercant = await commercantModel.find({ email: req.body.signUpEmail })
    
    if(commercant.length > 0){
  
      //console.log('We already have a user with this email')
  
      // Session
      req.session.commercant = commercant
  
      // We can render the next page 
      res.render('index', { title: 'Express',user:req.session.user });
  
    }else{
  
      //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')
  
      var newCommercant = new commercantModel ({
        name: req.body.signUpName, 
        firstName: req.body.signUpFirstName, 
        address: req.body.signUpAddress, 
        password: req.body.signUpPassword, 
        email: req.body.signUpEmail, 
      });
  
      await newCommercant.save()
  
      //console.log(' /Sign-UP : Our new user -->',newUser)
  
      // Session
      req.session.commercant = newCommercant
  
      // We can render the next page 
      res.render('index', {user: req.session.commercant});
      
    }  
  });
  
  router.put('commercants/sign-up', async function(req, res, next) {
  
      // console.log(' /Sign-Up : result from the front -->',req.body)
    
      var commercant = await commercantModel.find({ email: req.body.signUpEmail })
      
      if(commercant.length > 0){
    
        //console.log('We already have a user with this email')
    
        // Session
        req.session.commercant = commercant
    
        // We can render the next page 
        res.render('index', { title: 'Express',commercant:req.session.commercant });
    
      }else{
    
        //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')
    
        var newCommercant = new commercantModel ({
          name: req.body.signUpName, 
          firstName: req.body.signUpFirstName, 
          password: req.body.signUpPassword, 
          address: req.body.signUpAddress, 
          email: req.body.signUpEmail, 
          address: req.body.address, 
        });
    
        await newCommercant.save()
    
        //console.log(' /Sign-UP : Our new user -->',newUser)
    
        // Session
        req.session.commercant = newCommercant
    
        // We can render the next page 
        res.render('index', {commercant: req.session.commercant});
        
      }  
    });

router.get('/myarticles', async function(req, res, next) {

 
var articles = 
 



    res.render('page1', {});
  
  
});


router.post('/newarticle', async function(req, res, next) {

var commercant = await commercantModel.findOne({ _id: req.commercant.id});

commercant.Articles.push ({
  article : req.body.article,
  price: req.body.price,
  quantite: req.body.quantite, 


})


  res.redirect('/myarticle')
  
});


router.get('/newarticle', async function(req, res, next) {

  res.render('newarticle',{myarticle});
  
});


router.delete('/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    
      
     
  });

  router.delete('commercants/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    
      
     
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
