var express = require('express')
var app = express()

// Build Your Route Here
const welcomePhrase = 'Hello, World from Express and EJS!'

app.get('/',function(req,resp){
  resp.render('index', {welcomePhrase: welcomePhrase})
})

module.exports = app
