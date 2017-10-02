function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let expect = require('chai').expect;

describe("Test summator", function () {
    it("Should returtn 3 for [1, 2]", function () {
       expect(sum([1,2])).to.equal(3);
    });

    it("Should returtn 0 for []", function () {
        let expected = 0;
        let actual = sum([]);
        expect(actual).to.equal(expected);
    });
    it("Should returtn 0 for []", function () {
        let expected = 0;
        let actual = sum([]);
        expect(actual).to.equal(expected);
    });

    it("Should returtn NaN for ['pesho', 2]", function () {
        expect(sum(['pesho',2])).to.be.NaN;
    });
});







describe("sum(arr) - sum array of numbers", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 1 for [1]", function() {
        expect(sum([1])).to.be.equal(1);
    });
    it("should return 0 for empty array", function() {
        expect(sum([])).to.be.equal(0);
    });
    it("should return 3 for [1.5, 2.5, -1]", function() {
        expect(sum([1.5, 2.5, -1])).to.be.equal(3);
    });
    it("should return NaN for invalid data", function() {
        expect(sum(['fu', 'ck'])).to.be.NaN;
    });
});
