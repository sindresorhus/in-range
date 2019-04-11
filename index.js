'use strict';

module.exports = (number, {start = 0, end}) => {
	if (
		typeof number !== 'number' ||
		typeof start !== 'number' ||
		typeof end !== 'number'
	) {
		throw new TypeError('Expected all arguments to be numbers');
	}

	return number >= Math.min(start, end) && number <= Math.max(end, start);
};
