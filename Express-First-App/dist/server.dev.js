"use strict";

var express = require('express');

var app = express();
app.get('/hello', function (req, res) {
  var name = 'Guest';

  if (req.query.user) {
    name = req.query.user;
  }

  res.send('Hello ' + name + ",how are you?");
});
app.use('/xyz', express["static"](__dirname + '/public'));
app.listen(4321, function () {
  console.log("Server started on http://localhost:4321");
});