"use strict";

var express = require("express");

var app = express();
app.use(express.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.send('<h1 style = "color : red "> Hello world </h1>');
});
app.get('/greet', function (req, res) {
  var person = 'Guest';

  if (req.query.person) {
    person = req.query.person;
  }

  console.log(req.query);
  res.send("Good Morning " + person);
});
app.post('/greet', function (req, res) {
  var person = 'Guest';

  if (req.body.person) {
    person = req.body.person;
  }

  console.log(req.query);
  res.send("Good Evening " + person);
});
app.get('/form', function (req, res) {
  res.sendFile("/web/Express/server.html");
});
app.listen(4444, function () {
  console.log('server started on http://localhost:4444');
});