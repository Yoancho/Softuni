describe('isOddOrEven', function () {
    it('with a number parameter, should return undefined', function () {
        expect(isOddOrEven(13)).to.equal(undefined, 'Function did not return the correct result !');
    });
    it('with a object parameter, should return undefined', function () {
        expect(isOddOrEven('gogo')).to.equal('even', 'Function did not return the correct result !');
    });
    it('with an even length string, should return return correct result', function () {
        expect(isOddOrEven('pesho')).to.equal('odd', 'Function did not return the correct result !');
    });
});

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
