const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes/index");

const app = express();

const IP = process.env.IP;
const PORT = process.env.PORT || 5000

// mongoose.connect('', { useMongoClient : true });

app.use(express.static('public'));

app.set('view engine', 'ejs');

// app.use('/', routes);

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
