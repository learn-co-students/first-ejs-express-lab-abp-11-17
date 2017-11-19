var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Welcome to HTML" // This would come from a DB
  const favoriteThings = ["Code", "People", "Music"]
  const viewData = {
    "welcomeText": welcomeText,
    name: "Avi",
    colors: ["Red", "Yellow", "Blue"],
    favoriteThings: favoriteThings
  }

  resp.render("index", viewData)
})

// I need a new route
app.get("/about", function(req, resp){
  resp.render("about")
})


module.exports = app
