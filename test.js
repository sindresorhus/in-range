import test from 'ava';
import inRange from '.';

test('main', t => {
	t.true(inRange(0, 0));
	t.true(inRange(1, 1));
	t.true(inRange(5, 10));
	t.true(inRange(1, 0, 1));
	t.true(inRange(2, 0, 2));
	t.true(inRange(5, 0, 10));
	t.true(inRange(10, -Infinity, Infinity));
	t.true(inRange(-10, -Infinity, Infinity));
	t.true(inRange(-1, -10, 10));
	t.true(inRange(1.5, 1.1, 1.7));
	t.true(inRange(1.5, 1.1, 1.7));
	t.true(inRange(5, 10, 1));
	t.false(inRange(3, 1, 2));
});
