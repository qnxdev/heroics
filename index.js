

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.get("*", function(req, res){
    res.render("404");
});

app.listen(PORT, function(){ 
    console.log("Server is Open @port 3000");
});
