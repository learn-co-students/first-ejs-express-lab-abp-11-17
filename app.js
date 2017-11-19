var express = require('express')
var app = express()

// Build Your Route Here

app.get("/", function(req, resp) {
  const welcomeText = "Hello, World from Express and EJS!"
  resp.render("index", {"welcomePhrase": welcomeText})
})

module.exports = app
