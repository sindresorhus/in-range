/**
Check if a number is in a specified range.

@param value - Number to check.
@param start - Start of the range. Default: `0`.
@param end - End of the range.

@example
```
import inRange = require('in-range');

inRange(30, 100); // 0..100
//=> true

inRange(30, 10, 100); // 10..100
//=> true

inRange(30, 100, 10); // 10..100
//=> true

inRange(30, 10); // 0..10
//=> false
```
*/
declare function inRange(value: number, end: number): boolean;
declare function inRange(value: number, start: number, end?: number): boolean;

export = inRange;
