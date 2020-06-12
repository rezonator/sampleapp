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

module.exports = router;
