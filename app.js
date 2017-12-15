var express = require('express')
var app = express()

app.get('/', function(req, resp){


  resp.render('index', {
    welcomePhrase: `Hello, World from Express and EJS!`
  })
})

module.exports = app
