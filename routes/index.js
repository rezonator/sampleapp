var express = require('express');
var router = express.Router();

/* LOGIN */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* FORGOT */
router.get('/forgot', function(req, res, next) {
  res.render('forgot', { title: 'Express' });
});

/* REGISTER */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/* INDEX */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ORDERS */
router.get('/orders', function(req, res, next) {

  res.render('orders', 
  { 
    title: 'Express' 
  });
});

/* ORDERS */
router.get('/pay/:id', function(req, res, next) {
  // get some data from this id.
  res.render('pay', 
  { 
    title: 'Express' 
  });
});

module.exports = router;
