# in-range

> Check if a number is in a given range

## Install

```
$ npm install in-range
```

## Usage

```js
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

## API

### inRange(number, range)

#### number

Type: `number | BigInt`

Number to check.

#### range

Type: `object`

##### start?

Type: `number | BigInt`\
Default: `0`

Start of the range.

##### end

Type: `number | BigInt`

End of the range.
