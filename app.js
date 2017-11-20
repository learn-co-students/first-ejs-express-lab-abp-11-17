var express = require('express')
var app = express()

app.get('/', function(request, response) {
  response.render('index', {welcomePhrase: 'Hello, World from Express and EJS!'});
})


module.exports = app
