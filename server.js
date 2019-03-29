//Dependencies
//========================================
//require express 
var express = require("express");
var path = require("path");

//Set up the Express App
//==========================================
var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public/'));

//HTML Routes
//==========================================

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/index.html"));
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "app/index.html"));
});

app.get("/portfolio", function(req, res){
    res.sendFile(path.join(__dirname, "app/portfolio.html"));
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "app/contact.html"));
});

//Start server to begin listening
//==========================================
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})