var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
  db.symptom.findAll().then(function(symptoms){
    res.render("symptoms/all", {symptoms: symptoms});
  });
});

router.post("/", function(req, res){
  db.symptom.create(req.body).then(function(symptom){
    res.redirect("/symptoms");
  }).catch(function(error){
    console.log("Error happened", error);
    res.send("ERROR");
  });
});

router.get("/add", function(req, res){
  res.render("symptoms/add");
});

module.exports = router;
