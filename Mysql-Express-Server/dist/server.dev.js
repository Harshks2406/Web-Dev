"use strict";

var express = require('express');

var app = express();

var path = require('path');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/pages', require('./routes/pages').route);
app.use('/api', require('./routes/api').route);
app.use('/', express["static"](path.join(__dirname, 'public-static')));
app.listen(5432, function () {
  console.log("Server started on http://localhost:5432");
});