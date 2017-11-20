var express = require('express')
var app = express()

// Build Your Route Here
app.get("/",function(req, resp){
  resp.render("index.ejs" ,{
    data:"passing this data"
  })
})

module.exports = app
