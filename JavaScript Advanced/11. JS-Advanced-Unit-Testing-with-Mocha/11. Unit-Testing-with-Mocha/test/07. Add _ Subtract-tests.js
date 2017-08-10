const createCalculator = require('./07. Add _ Subtract-tests').createCalculator;
let expect = require('chai').expect;
describe("Calculator maker", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });
    it("should return object", function () {
        expect(typeof calc).to.equal('object');
    });

});