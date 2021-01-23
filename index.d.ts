export interface Range {
	/**
	Start of the range.

	@default 0
	*/
	readonly start?: number | BigInt;

	/**
	End of the range.
	*/
	readonly end: number | BigInt;
}

/**
Check if a number is in a given range.

@example
```
import inRange from 'in-range';

inRange(30, {end: 100}); // 0..100
//=> true

inRange(30, {start: 10, end: 100}); // 10..100
//=> true

inRange(30, {start: 100, end: 10}); // 10..100
//=> true

inRange(30, {end: 10}); // 0..10
//=> false

// Any input can be a BigInt
inRange(30n, {start: 100n, end: 10}); // 10..100
//=> true
```
*/
declare function inRange(number: number | BigInt, range: Range): boolean;

export default inRange;
