// Need to test manually, run browserify and open test.html
// $ browserify test.js > tmp.js

'use strict';
var fn = require('../');
var data = {
	baz: Math.floor((Math.random() * 100) + 1),
	foo: Math.floor((Math.random() * 100) + 1)
};

var opts = {
	acceptCharset: 'UTF-8',
	action: 'index.html',
	id: 'Example',
	method: 'GET'
};

document.body.innerHTML += window.location.search;

setTimeout(function () {
	fn(data, opts);
}, 1000);
