var express = require('express')
var app = express()

app.get ("/", function (req, resp){
  const welcomeText = "welcome to Afrika's Html"
  const favoriteThings = ["reading", "coding", "fighting","teaching", "dancing"]
  const viewData = {
    "welcomeText": welcomeText,
    name: "Afrika",
    school: "Flatiron School",
    colors: ["Red", "Yellow", "Blue"],
    favoriteThings: favoriteThings
  }
  resp.render("index", viewData)
  })

  app.get ("/about", function (req, resp){
    resp.render ("about")
  })

module.exports = app
