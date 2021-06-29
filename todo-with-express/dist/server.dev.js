"use strict";

var express = require('express');

var app = express();
app.use(express.urlencoded({
  extended: true
}));
app.set("view engine", "hbs");
var Task = [];
app.get('/', function (req, res) {
  var taskList = Task.map(function (t) {
    return "<li>".concat(t, "</li>");
  }).join('\n');
  res.render('home', {
    title: 'Todo List',
    Task: Task
  }); // res.send(`
  // <html>
  // <body>
  //     <form action="/" method="POST">
  //         <input name="newTask">
  //         <button type="submit">Add</button>
  //     </form>
  //     <ul>${taskList}</ul>
  // </body>
  // </html>
  // `)
});
app.post('/', function (req, res) {
  Task.push(req.body.newTask);
  res.redirect('/');
});
app.listen(5555, function () {
  console.log("server started");
});