var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function (req,resp) {
  const welcomePhrase="Hello, World from Express and EJS!"
  resp.render("index",{
    "welcomePhrase":welcomePhrase
  })
})

module.exports = app
