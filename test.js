'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn(0, 0));
	t.assert(fn(1, 1));
	t.assert(fn(5, 10));
	t.assert(fn(1, 0, 1));
	t.assert(fn(2, 0, 2));
	t.assert(fn(5, 0, 10));
	t.assert(fn(10, -Infinity, Infinity));
	t.assert(fn(-10, -Infinity, Infinity));
	t.assert(fn(-1, -10, 10));
	t.assert(fn(1.5, 1.1, 1.7));
	t.assert(fn(1.5, 1.1, 1.7));
	t.assert(fn(5, 10, 1));
	t.end();
});
