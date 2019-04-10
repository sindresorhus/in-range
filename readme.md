# in-range [![Build Status](https://travis-ci.org/sindresorhus/in-range.svg?branch=master)](https://travis-ci.org/sindresorhus/in-range)

> Check if a number is in a specified range


## Install

```
$ npm install in-range
```


## Usage

```js
const inRange = require('in-range');

inRange(30, 100); // 0..100
//=> true

inRange(30, 10, 100); // 10..100
//=> true

inRange(30, 100, 10); // 10..100
//=> true

inRange(30, 10); // 0..10
//=> false
```


## API

### inRange(number, end)
### inRange(number, start, end)

#### number

Type: `number`

Number to check.

#### start

Type: `number`
Default: `0`

Start of the range.

#### end

Type: `number`

End of the range.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
