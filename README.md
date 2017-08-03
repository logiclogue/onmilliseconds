# onMilliseconds

An infinite version of `setTimeout`.

`setTimeout` has a maximum timeout of approximately 24.86 days. That's fine for
most applications. But if you're needing a timeout that is going to callback in,
let's say, 2 months, it's going to be a problem.

You can replace your `setTimeout` with `onMilliseconds` and it will work exactly
the same.

## Installation

```
npm i --save onmilliseconds
```

## Usage

```
var timeoutID = onMilliseconds(function[, delay, param1, param2, ...]);
var timeoutID = onMilliseconds(function[, delay]);
var timeoutID = onMilliseconds(code[, delay]);
```

## Example

```
var onMilliseconds = require('onmilliseconds');

var days = 40;
var milliseconds = days * 24 * 60 * 60 * 1000;

onMilliseconds(function () {
    console.log('40 days have passed!');
}, milliseconds);
```

## Author

Jordan Lord

## License

MIT License
