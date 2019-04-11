import test from 'ava';
import inRange from '.';

test('main', t => {
	t.true(inRange(0, {end: 0}));
	t.true(inRange(1, {end: 1}));
	t.true(inRange(5, {end: 10}));
	t.true(inRange(1, {start: 0, end: 1}));
	t.true(inRange(2, {start: 0, end: 2}));
	t.true(inRange(5, {start: 0, end: 10}));
	t.true(inRange(10, {start: -Infinity, end: Infinity}));
	t.true(inRange(-10, {start: -Infinity, end: Infinity}));
	t.true(inRange(-1, {start: -10, end: 10}));
	t.true(inRange(1.5, {start: 1.1, end: 1.7}));
	t.true(inRange(1.5, {start: 1.1, end: 1.7}));
	t.true(inRange(5, {start: 10, end: 1}));
	t.false(inRange(3, {start: 1, end: 2}));
});
