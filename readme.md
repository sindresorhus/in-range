# in-range [![Build Status](https://travis-ci.org/sindresorhus/in-range.svg?branch=master)](https://travis-ci.org/sindresorhus/in-range)

> Check if a number is in a given range


## Install

```
$ npm install in-range
```


## Usage

```js
const inRange = require('in-range');

inRange(30, {end: 100}); // 0..100
//=> true

inRange(30, {start: 10, end: 100}); // 10..100
//=> true

inRange(30, {start: 100, end: 10}); // 10..100
//=> true

inRange(30, {end: 10}); // 0..10
//=> false
```


## API

### inRange(number, range)

#### number

Type: `number`

Number to check.

#### range

Type: `Object`

##### start

Type: `number`<br>
Default: `0`

Start of the range.

##### end

Type: `number`

End of the range.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
