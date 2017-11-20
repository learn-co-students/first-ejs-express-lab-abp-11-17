var express = require('express') //loading a package
var app = express()  //defining a variable

// Build Your Route Here
app.get('/', function(req, resp){  //callback controller action (load data)
  const welcomePhrase = `Hello, World from Express and EJS!`

  resp.render("index", {
    "welcomePhrase": welcomePhrase,
    name: "Becky",
    }) //new variable available, pass data from controller action into view
})


module.exports = app
