var express = require('express')
var app = express()

app.get('/', function(req, resp){
  viewData = {welcomePhrase: "Hello, World from Express and EJS!"}
  resp.render('index', viewData)
})

module.exports = app
