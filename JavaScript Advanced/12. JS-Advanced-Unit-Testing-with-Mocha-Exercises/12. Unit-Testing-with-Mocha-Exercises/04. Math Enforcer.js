let expect = require('chai').expect;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};





describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive('5')).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(-14)).to.equal(-9, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5, 'The function did not return the correct result')
        });
    });
    describe('subtractTen', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen('gergi')).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(9)).to.equal(-1, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5, 'The function did not return the correct result')
        });
    });
    describe('sum', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum('gergi', 5)).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(8, 'gosho')).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(10, -5)).to.equal(5, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(8, 3)).to.equal(11, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(8.6, 3.14)).to.equal(11.74, 'The function did not return the correct result')
        });
    });

});

