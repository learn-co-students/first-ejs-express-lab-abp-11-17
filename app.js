var express = require('express')
var app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
  const welcomePhrase = "Hello, World from Express and EJS!"
  const viewData = {
    welcomePhrase: welcomePhrase
  }

  resp.render('index', viewData)
});


module.exports = app
