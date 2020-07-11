const express = require('express');
const router  = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/', function(req, res){
    res.render('home');
});

router.get('/register', function(req, res){
   res.render('register'); 
});

router.get('/login', function(req, res){
   res.render('login'); 
});

router.get('*', function(req, res){
    res.render('404');
})

module.exports = router;