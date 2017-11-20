// this file is not transpiled, so must use CommonJS and ES5

//Register babel to tranpile before our test run.
require('babel-register')();

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () { };