var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var UserModel = require('../models/users')
var CommercantModel = require('../models/commercants')

	
const users = [
    {
      firstName: "Alice",
      name: "Smith",
      email: "as@gmail.com",
      password: "123",
      address: "119 Avenue maréchal de Saxe",
      phonenumber: 623455589, 
      
    },
    {
      
      firstName: "Jonh",
      name: "Doe",
      email: "jg@gmail.com",
      password: "123",
      address: "119 Avenue maréchal de Saxe", 
      phonenumber: 623456789,
    },
    {
    
      firstName: "Tony",
      name: "Paul",
      email: "tp@gmail.com",
      password: "123",
      address: "119 Avenue maréchal de Saxe",
      phonenumber: 623455009,

    },
  ];

  const commercants = [
    {
      firstName: "Alice",
      name: "Smith",
      email: "as@gmail.com",
      enseignecommerciale: "ladygaga", 
      password: "123",
      phonenumber: 623455589,
      address: "119 Avenue maréchal de Saxe",
      articles: 
      {
        article: "sac",
        price: 15,
        quantite: 10, 
      },
      hours: 
      {
        Dayclosed: "Saturday",
        HeuresOuverts: 8,
        Heuresfermes: 18, 
      }, 

      
    },
    {
      
      firstName: "Jonh",
      name: "Doe",
      email: "jg@gmail.com",
      enseignecommerciale: "ladygaga", 
      password: "123",
      phonenumber: 623456789,
      address: "119 Avenue maréchal de Saxe", 
      articles: 
      {
        article: "sac",
        price: 15,
        quantite: 10, 
      },
      hours: 
      {
        Dayclosed: "Saturday",
        HeuresOuverts: 8,
        Heuresfermes: 18, 
      }
    },
    {
    
      firstName: "Tony",
      name: "Paul",
      email: "tp@gmail.com",
      enseignecommerciale: "ladygaga", 
      password: "123",
      phonenumber: 623455009,
      address: "119 Avenue maréchal de Saxe",
      articles: 
      {
        article: "sac",
        price: 15,
        quantite: 10, 
      }, 
      hours: 
      {
        Dayclosed: "Saturday",
        HeuresOuverts: 8,
        Heuresfermes: 18, 
      }, 


    },
  ];

  /* GET home page. Création de la base*/

  router.get("/", async function (req, res, next) {

    for (let i = 0; i < users.length; i++) {
      let newUser = new UserModel(users[i]);
      let newUserSaved = await newUser.save();
    }
    res.render("index", { title: "Create DB" });
  });

  router.get("/commercants", async function (req, res, next) {

    for (let i = 0; i < commercants.length; i++) {
      let newCommercant = new CommercantModel(commercants[i]);
      let newCommercantSaved = await newCommercant.save();
    }
    res.render("index", { title: "Create DB" });
  });





router.get('/mycommandes', async function(req, res, next) {

 

  var user = await UserModel.findById(req.session.user._id)
  var commandes = user.populate('articles')


 res.render('mycommandes', { title: 'Express', commandes:commandes });
  
});

/* Post Sign-in */
router.post('/sign-in', async function(req, res, next) {

   //console.log(' /sign-In : result from the front -->',req.body)

  var user = await UserModel.find({ email: req.body.signInEmail, password: req.body.signInPassword })
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
      req.session.commercant = commercant
  
      // We can render the next page 
      res.render('index', { title: 'Express',user:req.session.user });
  
    }else{
  
      //console.log(' /Sign-UP : We dont have a user with this email, so we need to save it')
  
      var newCommercant = new CommercantModel ({
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

router.get('/myarticles', async function(req, res, next) {

 
var articles = await commercantModel.findOne({ _id: req.commercant.id});
 



    res.render('page1', {article:articles.article, price:articles.prices});
  
  
});


router.post('/newarticle', async function(req, res, next) {

var commercant = await commercantModel.findOne({ _id: req.commercant.id});

commercant.Articles.push ({
  article : req.body.article,
  price: req.body.price,
  quantite: req.body.quantite, 

})


  res.redirect('/myarticles')
  
});


router.delete('/article', async function(req, res, next) {
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
