import test from 'ava';
import m from './';

test(t => {
	t.true(m(0, 0));
	t.true(m(1, 1));
	t.true(m(5, 10));
	t.true(m(1, 0, 1));
	t.true(m(2, 0, 2));
	t.true(m(5, 0, 10));
	t.true(m(10, -Infinity, Infinity));
	t.true(m(-10, -Infinity, Infinity));
	t.true(m(-1, -10, 10));
	t.true(m(1.5, 1.1, 1.7));
	t.true(m(1.5, 1.1, 1.7));
	t.true(m(5, 10, 1));
	t.false(m(3, 1, 2));
});
