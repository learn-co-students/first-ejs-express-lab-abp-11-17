var express = require('express')
var app = express()

// Build Your Route Here
var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Welcome to HTML"
  const favoriteThings = ["Code","People","Music"]
  const viewData = {
    "welcomeText": welcomeText,
    name:"Avi",
    colors: ["Red","Yellow","Blue"],
    "favoriteThings": favoriteThings
  }
  resp.render("index", viewData)
  })
app.get("/about",function(req,resp){
  resp.render("about")
})


module.exports = app


module.exports = app
