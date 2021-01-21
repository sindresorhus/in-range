'use strict';

const min = (left, right) => left < right ? left : right;
const max = (left, right) => left > right ? left : right;

const isNumberOrBigInt = value => ['number', 'bigint'].includes(typeof value);

module.exports = (number, {start = 0, end}) => {
	if (
		!isNumberOrBigInt(number) ||
		!isNumberOrBigInt(number) ||
		!isNumberOrBigInt(number)
	) {
		throw new TypeError('Expected each argument to be either a number or a BigInt');
	}

	return number >= min(start, end) && number <= max(end, start);
};
