var express = require('express')
var app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, resp){

  resp.render('index',{welcomePhrase: "Hello, World from Express and EJS!"})
})

// Build Your Route Here


module.exports = app
