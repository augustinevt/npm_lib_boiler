"use strict";

var nominative = {
  "f": "e",
  "m": "",
  "n": "",
  "p": "e"
};
var akkusative = {
  "f": "e",
  "m": "en",
  "n": "",
  "p": "e"
};
var dative = {
  "f": "er",
  "m": "em",
  "n": "em",
  "p": "en"
};
var genetive = {
  "f": "er",
  "m": "es",
  "n": "es",
  "p": "er"
};
var bank = {
  nominative: nominative,
  akkusative: akkusative,
  dative: dative,
  genetive: genetive
};

var declinePosessivePronoun = function declinePosessivePronoun(root, gender, fall) {
  var result;
  var fallBank;
  var ending;

  try {
    fallBank = bank[fall];
  } catch (e) {
    result = "".concat(fall, " is not a recognized fall");
  }

  try {
    ending = fallBank[gender];
  } catch (e) {
    result = "".concat(gender, " is not a recognized gender");
  }

  result = root + ending;
  return result;
};

module.exports = declinePosessivePronoun;