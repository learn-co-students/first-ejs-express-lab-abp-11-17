var express = require('express')
var app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Build Your Route Here

app.get('/', function (req, resp){
  const welcomePhrase ="Hello, World from Express and EJS!";
  resp.render('index', {welcomePhrase: welcomePhrase} );
})

module.exports = app
