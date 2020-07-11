const express = require('express');
const routes = require('./routes/index');

const mongoose = require('mongoose');
const passport = require('passport');

const LocalStrategy = require('passport-local');
const User = require('./models/user');

const IP = process.env.IP;
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

/*
mongoose.connect('', { 
    useMongoClient : true 
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', routes);
*/

app.get('/', function(req, res){
    res.render('home');
});

app.get('*', function(req, res){
    res.render('404');
});

app.listen(PORT, IP, function(){ 
    console.log({
        'PORT' : PORT,
        'IP' : IP
    });
});
