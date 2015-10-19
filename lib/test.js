
var randomstring = require("./randomstring.js");
//var subject = require('./subject.js')

randomstring.generate(7);

randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});

randomstring.generate({
  length: 33,
  charset: 'alphabetic'
});

randomstring.generate({
  charset: 'abc'
});

randomstring.generate({

});
