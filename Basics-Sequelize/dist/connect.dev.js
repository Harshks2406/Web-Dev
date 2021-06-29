"use strict";

var Sequelize = require('sequelize');

var DataTypes = Sequelize.DataTypes;
var db = new Sequelize('sampledb1', 'myuser', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = {
  db: db
};