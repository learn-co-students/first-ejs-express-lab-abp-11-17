var express = require('express')
var app = express()

// Build Your Route Here
const welcomePhrase = "Hello, World from Express and EJS!";
const myJobs = ["Barista", "Pole Aerialist"];

app.get("/", function(req, resp) {
  resp.render("index", {
    welcomePhrase: welcomePhrase,
    name: "Jence Kade",
    myJobs: myJobs
  });
});

module.exports = app
