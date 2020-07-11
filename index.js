const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require("./routes/index");

const User = require("./models/user");

const app = express();

const IP = process.env.IP;
const PORT = process.env.PORT || 5000

// mongoose.connect('', { useMongoClient : true });

app.use(express.static('public'));

app.set('view engine', 'ejs');

/*

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.use(cookieParser('secret'));

app.use(require('express-session')({
    secret : '',
    resave : false,
    saveUninitialized : false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

app.use('/', routes);

*/

app.get("/", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.render("404");
});

app.listen(PORT, IP, function(){ 
    console.log({
        'PORT' : PORT,
        'IP' : IP
    });
});
