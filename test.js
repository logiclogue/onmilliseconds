var onMilliseconds = require('./index.js');
var assert = require('chai').assert;

it('should callback', function (done) {
    onMilliseconds(done, 0);
});

context('200 milliseconds', function () {
    it('should take less than 210ms', function (done) {
        this.timeout(210);
        this.slow(210);

        onMilliseconds(done, 200);
    });

    it('should take longer than 200ms', function (done) {
        var startTime = Date.now();
        var diff;

        this.slow(210);

        onMilliseconds(() => {
            diff = Date.now() - startTime;

            done(assert.isTrue(diff >= 200));
        }, 200);
    });
});

context('0x80000000 milliseconds', function () {
    it('should not callback within 200ms', function (done) {
        this.timeout(210);
        this.slow(210);

        onMilliseconds(() => {
            done(new Error('called back too quickly'));
        }, 0x80000000);

        setTimeout(() => {
            done();
        }, 200);
    });
});

context('extra parameters are passed', function () {
    it('should callback with the parameters', function (done) {
        onMilliseconds((x, y) => {
            assert.equal(x, 5);
            assert.equal(y, 2);

            done();
        }, 0, 5, 2);
    });
});
