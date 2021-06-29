"use strict";

var inpCode = document.getElementById('inpCode');
var btnEncode = document.getElementById('btnEncode');
var encrypt = document.getElementById('encrypt');
var code = document.getElementById('code');

btnEncode.onclick = function () {
  var data = inpCode.value;
  data = btoa(data);
  code.value = data;
};

encrypt.onclick = function () {
  var data = code.value;
  data = encryptData(data);
  code.value = data;
};

function encryptData(rawData) {
  var ln = rawData.length;
  var n;
  console.log(ln);

  for (var i = 0; i < ln; i++) {
    if (rawData[i] >= 'a' && rawData[i] <= 'z') {
      newRaw = rawData.charCodeAt(i) - 32;
      n = rawData.replace(rawData[i], String.fromCharCode(newRaw));
      rawData = n;
    } else if (rawData[i] >= 'A' && rawData[i] <= 'Z') {
      newRaw = rawData.charCodeAt(i) + 32;
      n = rawData.replace(rawData[i], String.fromCharCode(newRaw));
      rawData = n;
    }
  }

  return rawData;
}