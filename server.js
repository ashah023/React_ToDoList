var path    = require('path');
var express = require('express');
var Router  = require('react-router');

var app  = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '')));

app.get('*', function(req, res) {
  console.log("Requested : ", req.path)
  res.sendFile(__dirname + '/index.html')
});
