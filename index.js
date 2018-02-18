'use strict';

var split = require('@fav/text.camel-case').split;

function pascalCase(text) {
  return join(split(text));
}

function join(words) {
  var ret = '';

  for (var i = 0, n = words.length; i < n; i++) {
    var word = String(words[i]);
    ret += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  return ret;
}

Object.defineProperties(pascalCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = pascalCase;
