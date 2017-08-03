var maxInt = 0x7FFFFFFF;

function onMilliseconds(callback, milliseconds) {
    milliseconds = Math.max((milliseconds || 0), 0);

    if (milliseconds > maxInt) {
        setTimeout(function () {
            var diff = milliseconds - maxInt;

            onMilliseconds(callback, diff);
        }, maxInt);
    } else {
        setTimeout(callback, milliseconds);
    }
}

module.exports = onMilliseconds;
