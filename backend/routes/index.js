var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var UserModel = require('../models/users')
var CommercantModel = require('../models/commercants')



  /* GET home page. Création de la base*/


router.get('/:userId/mycommandes', async function(req, res, next) {

 

  var user = await UserModel.findById(req.session.user._id)
  var commandes = user.populate('articles')


 res.render('mycommandes', { title: 'Express', commandes:commandes });
  
});

/* Post Sign-in */
router.post('/sign-in', async function(req, res, next) {

  var isLogin = true ; 

   

  var user = await UserModel.find({ email: req.body.signInEmail, password: req.body.signInPassword })
  if(user.length > 0){

    //console.log(' /sign IN : We do have a user with this email')

    // Session
    req.session.user = user[0]

    // We can render the next page 
    res.json({isLogin});

  }else{

    //console.log(' /Sign IN : We dont have a user with this email, so he needs to sign-up first')

    // We can render the next page 
    res.render('login', {alertMessage:'You need to sign-up first' });
    
  }
  
});

/* Post Sign-up */
router.post('/sign-up', async function(req, res, next) {

  // console.log(' /Sign-Up : result from the front -->',req.body)

var isLogin = true; 

  console.log(req.body.username)
  
  
  if(!req.body.username){

    //console.log('We already have a user with this email')

    // Session
    //req.session.user = user

    // We can render the next page 
    res.json(); 

  }else{

    //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')

    console.log(req.body.username)

    var newUser = new UserModel ({
      name: req.body.username, 
      firstName: req.body.firstname,  
      password: req.body.pwd,  
      email: req.body.email, 
      phonenumer: req.body.phonenumber, 
      address: req.body.address, 
    });

    await newUser.save()

    //console.log(' /Sign-UP : Our new user -->',newUser)

    // Session
   // req.session.user = newUser

    // We can render the next page 
    res.json({isLogin});
    
  }  
});

router.put('/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    var user = await UserModel.find({ email: req.body.signUpEmail })
    
    if(user.length > 0){
  
      //console.log('We already have a user with this email')
  
      // Session
      req.session.user = user
  
      // We can render the next page 
      res.render('index', { title: 'Express',user:req.session.user });
  
    }else{
  
      //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')
  
      var newUser = new UserModel ({
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
  
    var commercant = await CommercantModel.find({ email: req.body.signUpEmail })
    
    if(commercant.length > 0){
  
      //console.log('We already have a user with this email')
  
      // Session
      
  
    }else{
  
      //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')
  
      var newCommercant = new CommercantModel ({
        name: req.body.signupCommercantName, 
        firstName: req.body.signupCommercantFirstName, 
        address: req.body.signupCommercantAddress, 
        password: req.body.signupCommercantPassword, 
        email: req.body.signupCommercantEmail, 
      });
  
      await newCommercant.save()
  
      //console.log(' /Sign-UP : Our new user -->',newUser)
  
      // Session
    
  
      // We can render the next page 
      res.json();
      
    }  
  });
  
  router.put('commercants/sign-up', async function(req, res, next) {
  
      // console.log(' /Sign-Up : result from the front -->',req.body)
    
      var commercant = await CommercantModel.find({ email: req.body.signUpEmail })
      
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

router.get('/:commercantId/myarticles', async function(req, res, next) {

 
var articles = await commercantModel.findOne({ _id: req.commercant.id});
 



    res.render('page1', {article:articles.article, price:articles.prices});
  
  
});


router.post('/:commercantId/newarticle', async function(req, res, next) {

var commercant = await commercantModel.findOne({ _id: req.commercant.id});

commercant.Articles.push ({
  article : req.body.article,
  price: req.body.price,
  quantite: req.body.quantite, 

})


  res.json(); 
  
});


router.delete('/:commercantId/article', async function(req, res, next) {
  var commercant = await commercantModel.findOne({ _id: req.commercant.id});

  res.render('newarticle',{myarticle});
  
});


router.delete('/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    
      
     
  });

  router.delete('commercants/sign-up', async function(req, res, next) {

    // console.log(' /Sign-Up : result from the front -->',req.body)
  
    
      
     
  });



/* RAJOUTER LE TYPE D'ENSEIGNE DANS LA BDD (BOULNGE,POISSONERIE, ETC )*/
router.post('/map',async function(req, res, next) {
  var commercantAfficher = [] ;

  var commercant = await CommercantModel.find() ;

      var besoin = req.body
      besoin = besoin.redux
console.log(besoin);

if (besoin.length !== 0 ) {

  for (let i = 0; i < besoin.length; i++) {
    for (let j = 0; j < commercant.length; j++) {
      if (besoin[i] == commercant[j].type) {
        commercantAfficher.push(commercant[j])  
      }
    }
  }
  
}

console.log(commercantAfficher);


  res.json({commercantAfficher});
});



module.exports = router;
