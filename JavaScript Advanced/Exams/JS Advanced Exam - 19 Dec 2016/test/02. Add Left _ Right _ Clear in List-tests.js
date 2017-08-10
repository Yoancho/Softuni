let makeList = require('../02. Add Left _ Right _ Clear in List');
let expect = require('chai').expect;

    describe("is prop exist", function() {
        let myList = {};
        beforeEach(function () {
            myList = makeList();
        });
        it("check property is exist", function() {
            expect(myList.addLeft.toString()).to.exist;
            expect(myList.addRight.toString()).to.exist;
            expect(myList.clear.toString()).to.exist;
            expect(myList.toString()).to.exist;
        });
        it("is first data empty", function() {
            expect(myList.toString()).to.equal('');
        });
        it("insert multiple elements in right", function() {
            myList.addRight('Pepi');
            myList.addRight('Gogo');
            myList.addRight('Vania');
            expect(myList.toString()).to.equal("Pepi, Gogo, Vania");
        });
        it("insert multiple elements in left", function() {
            myList.addLeft('Pepi');
            myList.addLeft('Gogo');
            myList.addLeft('Vania');
            expect(myList.toString()).to.equal("Vania, Gogo, Pepi");
        });
        it("clear elements", function() {
            myList.addLeft('Vania');
            myList.clear();
            expect(myList.toString()).to.equal('');
        });
    });