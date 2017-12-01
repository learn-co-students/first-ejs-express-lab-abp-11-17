var express = require('express')
var app = express()

// Build Your Route Here

app.get('/', function(request, response){
  const welcomePhrase = "Hello, World from Express and EJS!";

  response.render('index', {
    welcomePhrase: welcomePhrase
  });
})

module.exports = app
