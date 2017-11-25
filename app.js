var express = require('express')
var app = express()

// Build Your Route Here
app.get(`/`, function(req, resp){
  const welcomePhrase = {welcomePhrase : `Hello, World from Express and EJS!`}
  resp.render('index', welcomePhrase)
})

module.exports = app
