//Includes & Global Variables
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var app = express();

//Set and Use Statements
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);

//Define Routes
app.get("/", function(req, res){
  res.render("home");
});

//Controllers
app.use("/diseases", require("./controllers/diseases"));
app.use("/symptoms", require("./controllers/symptoms"));

//Listen
app.listen(process.env.PORT || 3000);
