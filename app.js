var express = require('express')
var app = express()
const path = require('path')

// Build Your Route Here
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
   const data = 'Hello, World from Express and EJS!'
   resp.render('index', {"welcomePhrase": data})

})

module.exports = app
