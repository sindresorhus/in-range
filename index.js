'use strict';
module.exports = (value, start, end) => {
	if (end === undefined) {
		end = start;
		start = 0;
	}

	if (
		typeof value !== 'number' ||
		typeof start !== 'number' ||
		typeof end !== 'number'
	) {
		throw new TypeError('Expected all arguments to be numbers');
	}

	return value >= Math.min(start, end) && value <= Math.max(end, start);
};
