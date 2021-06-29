"use strict";

var route = require('express').Router();

var db = require('../db');

route.get('/', function (req, res) {
  db.getAllPerson().then(function (persons) {
    return res.send(persons);
  })["catch"](function (err) {
    return res.send({
      error: err
    });
  });
});
route.post('/', function (req, res) {
  db.addNewPerson(req.body.name, req.body.age, req.body.city).then(function () {
    return res.redirect('/api/persons');
  })["catch"](function (err) {
    return res.send({
      error: err
    });
  });
});
exports = module.exports = {
  route: route
};