var maxInt = 0x7FFFFFFF;

function onMilliseconds(callback, milliseconds) {
    milliseconds = Math.max((milliseconds || 0), 0);

    var callbackArgs = callbackArguments(arguments);

    if (milliseconds > maxInt) {
        return setTimeout(function () {
            var diff = milliseconds - maxInt;

            onMilliseconds.apply(
                this,
                [callback, diff].concat(callbackArgs));
        }, maxInt);
    }

    return setTimeout.apply(
        this,
        [callback, milliseconds].concat(callbackArgs));
}

function callbackArguments(args) {
    return Array.prototype.slice.call(args, 2);
}

module.exports = onMilliseconds;
