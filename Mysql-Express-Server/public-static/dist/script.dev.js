"use strict";

$(function () {
  var inp_name = $('#name');
  var inp_age = $('#age');
  var inp_city = $('#city');
  var btn_submit = $('#submit');
  var tbl_person = $('#persons');

  function refreshPersonTable(persons) {
    tbl_person.empty();
    tbl_person.append("<tr>\n            <th>Name</th>\n            <th>Age</th>\n            <th>City</th>\n            <tr>");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = persons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        person = _step.value;
        tbl_person.append("<tr>\n            <td>".concat(peron.name, "</td>\n            <td>").concat(person.age, "</td>\n            <td>").concat(person.city, "</td>\n            <tr>"));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  $.get('/api/persons', function (data) {
    refreshPersonTable(data);
  });
  btn_submit.click(function () {
    $.post('/api/persons', {
      name: inp_name.val(),
      age: inp_age.val(),
      city: inp_city.val()
    }, function (data) {
      refreshPersonTable(data);
    });
  });
});