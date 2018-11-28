"use strict";

var fs = require('fs');

fs.watch('testWatch.js', function (curr, prev) {
  console.log('hello motherfucker');
});