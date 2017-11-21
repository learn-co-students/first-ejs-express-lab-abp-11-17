var express = require('express')
var app = express()

// Build Your Route Here
let obj1 = {welcomePhrase: "Hello MOTO!"};
app.get("/", function (req, res){
  res.render("index", {welcomePhrase: "Hello, World from Express and EJS!"} );
})

module.exports = app
