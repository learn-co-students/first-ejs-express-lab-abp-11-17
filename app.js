var express = require('express')
var app = express()

// Build Your Route Here
app.get('/', function(req, resp){
  let welcomePhrase = "Hello, World from Express and EJS!"

  resp.render('index',{
    "welcomePhrase": welcomePhrase
  })
})

module.exports = app
