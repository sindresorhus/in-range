'use strict';

module.exports = (number, start, end) => {
	if (end === undefined) {
		end = start;
		start = 0;
	}

	if (
		typeof number !== 'number' ||
		typeof start !== 'number' ||
		typeof end !== 'number'
	) {
		throw new TypeError('Expected all arguments to be numbers');
	}

	return number >= Math.min(start, end) && number <= Math.max(end, start);
};
