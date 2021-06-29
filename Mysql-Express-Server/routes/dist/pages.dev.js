"use strict";

var route = require('express').Router();

var db = require('../db');

route.get('/', function (req, res) {
  db.getAllPerson().then(function (persons) {
    res.render('persons', {
      persons: persons
    });
  })["catch"](function (err) {
    res.send(err);
  });
});
route.get('/add', function (req, res) {
  res.render('person_add');
});
route.post('/add', function (req, res) {
  db.addNewPerson(req.body.name, req.body.age, req.body.city).then(function () {
    res.redirect('/pages/');
  })["catch"](function (err) {
    res.send(err);
  });
});
exports = module.exports = {
  route: route
};