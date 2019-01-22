
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

var Users = require('../model/users');
var Order = require('../model/order');
var Pizza = require('../model/pizzadetail');

 router.use(bodyParser.urlencoded({
 	extended: true
 }))

router.get('/admin',function(req,res){
  res.render('admin')
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET menu page. */
router.get('/menu', function(req, res, next) {
  res.render('menu');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('footer');
});

//get veg pizza
router.get('/veg', function(req, res, next) {
  res.render('veg');
  console.log('req........', req.body);
  var order = new Order({
    description:req.body.description
  });
  var promise = order.save()
  promise.then((order) => {
    console.log('order detailed saved with values',order);
  })

});

//get non-veg pizza
router.get('/nonveg', function(req, res, next) {
  res.render('nonveg');
  console.log('req........', req.body);
  var order = new Order({
    description:req.body.description
  });
  var promise = order.save()
  promise.then((order) => {
    console.log('order detailed saved with values',order);
  })

});



//get mania pizza
router.get('/mania', function(req, res, next) {
  res.render('mania');
  console.log('req........', req.body);
  var order = new Order({
    description:req.body.description
  });
  var promise = order.save()
  promise.then((order) => {
    console.log('order detailed saved with values',order);
  })
});


//get option after order clicked
router.get('/order', function(req, res, next) {
  res.render('order');
});




 router.post('/order',function(req, res) {
  console.log('redirected');
  console.log('req........', req.body);
  var order = new Order({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    quantity: req.body.quantity
  });
  var promise = order.save()
  promise.then((order) => {
    console.log('order detailed saved with values',order);
  })

return res.redirect('/menu')
});

//get view cart


router.get('/view', function (req, res) {
  Order.find().exec(function(err, order) {
    res.render('view', {order})
  });
})

//delete

router.get('/delete/:id', function(req, res) {
  Order.findOneAndRemove({_id: req.params.id}, function(err, order) {
    console.log('deleted note is', order);
    res.redirect('/view')
  });
})

//get option after order clicked
router.get('/option', function(req, res, next) {
  res.render('option');
});


/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

 router.post('/register',function(req, res) {
  console.log('redirected');
  console.log('req........', req.body);
  var user = new Users({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password
  });
  var promise = user.save()
  promise.then((user) => {
    console.log('user saved with values', user);
  })

return res.redirect('/home')
});



router.post('/login', function(req, res) {
  if (req.body.username && req.body.password) {
    Users.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
      console.log('logged in user is....', user);
      res.redirect('/');
    })
  } else {
    console.log('enter username and password');
  }
});

/* Admin portion*/



/*router.get('/addPizza', function (req, res, next) {
  console.log('open')
  res.render('/addPizza');
});

router.post('/addPizza', function(req, res) {
  console.log('posting')
  var pizza = new Pizza({
    image: req.body.image,
    name: req.body.name,
    description:req.body.description,
    price:req.body.price,
    type:req.body.type
  })
  var promise = pizza.save()
  promise.then((pizza) => {
    console.log('saved note is:', pizza);
    Pizza.find().exec(function(err, pizzadetail) {
      res.render('viewPizza', {pizzadetail})
    });
  });
});
*/
router.get('/addPizza',function(req,res){
  res.render('addPizza')
});



router.post('/addPizza', function(req, res) {

    console.log('redirected');
  console.log('req........', req.body);
  var pizza = new Pizza({
    image: req.body.image,
    name: req.body.name,
    description:req.body.description,
    price:req.body.price,
    type:req.body.type

  });
  var promise = pizza.save()
  promise.then((pizza) => {
    console.log('user saved with values', pizza);
  })

return res.redirect('/home')
});

  
router.get('/deletePizza/:id', function(req, res) {
  Notes.findOneAndRemove({_id: req.params.id}, function(err,pizza) {
    console.log('deleted note is', pizza);
    res.redirect('/viewPizza')
  });
})



router.get('/viewPizza', function (req, res) {
  Pizza.find().exec(function(err, pizzadetail) {
    res.render('viewPizza', {pizzadetail})
  });
})


module.exports = router;

