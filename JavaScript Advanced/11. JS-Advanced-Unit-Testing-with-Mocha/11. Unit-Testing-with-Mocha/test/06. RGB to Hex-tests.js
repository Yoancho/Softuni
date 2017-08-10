let rgbToHexColor = requare('./06. RGB to Hex').rgbToHexColor;
let expect = requare('chai').expect;

describe("RGB to Hex Color", function () {
    it('should return #FF9EAA for (255, 158, 170)' , function () {
        expect(rgbToHexColor((255, 158, 170))).to.equal('#FF9EAA');
    });
    it('should pad values with zeroes' , function () {
        expect(rgbToHexColor((12, 13, 14))).to.equal('#0c0d0e');
    });
    it('should pad values at lower limit' , function () {
        expect(rgbToHexColor((0, 0, 0))).to.equal('#000000');
    });
    it('should pad values at upper limit' , function () {
        expect(rgbToHexColor((255, 255, 255))).to.equal('#FFFFFF');
    });
    it('should return undefined for negative values ' , function () {
        expect(rgbToHexColor((-1, -15, -18))).to.be.undefined;
    });
    it('should return undefined for greater than 255 ' , function () {
        expect(rgbToHexColor((256, 0, 0))).to.be.undefined;
    });
    it('should return undefined for greater than 255 ' , function () {
        expect(rgbToHexColor((0, 256, 0))).to.be.undefined;
    });
    it('should return undefined for greater than 255 ' , function () {
        expect(rgbToHexColor((0, 0, 256))).to.be.undefined;
    });
    it('should return undefined for fractions' , function () {
        expect(rgbToHexColor((2.17, 3.14, 8.18))).to.be.undefined;
    });
    it('should return undefined for fractions' , function () {
        expect(rgbToHexColor(('Pesho', {name: Gosho}, []))).to.be.undefined;
    });
});