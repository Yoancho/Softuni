function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('lookupChar', function () {
    it('with a non-string first parameter, should return undefined', function () {
        expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return the correct result !');
    });
    it('with a non-string second parameter, should return undefined', function () {
        expect(lookupChar('pepi', 'gogo')).to.equal(undefined, 'The function did not return the correct result !');
    });
    it('with a floating point number second parameter, should return undefined', function () {
        expect(lookupChar('pepi', 3.14)).to.equal(undefined, 'The function did not return the correct message');
    });
    it('with an incorrect index value, should return undefined', function () {
        expect(lookupChar('gosho', 13)).to.equal("Incorrect index", 'The function did not return the correct value');
    });
    it('with an index value equal to string length, should return incorrect index', function () {
        expect(lookupChar('pesho', 5)).to.equal("Incorrect index", 'The function did not return the correct value');
    });
    it('with correct parameters, should return correct values', function () {
        expect(lookupChar('pesho', 0)).to.equal('p', 'The function did not return the correct result !');
    });
    it('with correct parameters, should return correct values', function () {
        expect(lookupChar('stamat', 3)).to.equal('m', 'The function did not return the correct result !');
    });
});
