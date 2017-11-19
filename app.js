var express = require('express')
var app = express()


app.get("/", function(req, resp){
  const welcomeText = "Welcome to HTML"
  const favoriteThings = ["StrangerThings","Kobe"]
  const viewData = {
    "welcomeText": welcomeText,
    name: "James",
    colors: ["Yellow","Green","Blue"],
    favoriteThings: favoriteThings
  }
  resp.render("index",viewData)
})

// New route
// app.get("/about", function(req, resp){
//
//
//   resp.render("about")
// })
//
// module.exports = app
