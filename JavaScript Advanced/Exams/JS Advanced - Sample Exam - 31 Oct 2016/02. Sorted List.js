class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

let expect = require('chai').expect;


describe("SortedList", function() {
    let myList;

    beforeEach(function() {
        myList = new SortedList();
    });
    it('should have all functions in prototype', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, 'Function add() - not found');
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, 'Function remove() - not found');
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, 'Function get() - not found');

        expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true, 'Function vrfyRange() - not found');
        expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true, 'Function sort() - not found');
    });
    it('should have size property getter', function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, "Property size was not found.");
        expect(typeof myList.size).to.not.equal('function', "Property size should not be a function.");
    });
    it('should work ADD and GET functions', function () {
        myList.add('Pesho');
        expect(myList.get(0)).to.equal('Pesho', 'Element is NOT added');
    });
    it('should work ADD and REMOVE functions', function () {
        myList.add('Pesho');
        myList.add('Gosho');
        myList.add('Vania');
        myList.remove(0);
        myList.add(5);
        expect(myList.get(2)).to.equal( 5, 'Element is NOT added');
    });
    it('should be sorted after ADDing function', function () {
        myList.add(9);
        expect(myList.get(0)).to.equal( 9, 'Collection is not sorted');
        myList.add(2);
        expect(myList.get(0)).to.equal( 2, 'Collection is not sorted');
        expect(myList.get(1)).to.equal( 9, 'Collection is not sorted');
    });
    it('should be sorted after REMOVing function', function () {
        myList.add(9);
        myList.add(2);
        myList.add(6);
        expect(myList.get(0)).to.equal( 2, 'Collection is not sorted');
        myList.remove(0);
        expect(myList.get(0)).to.equal( 6, 'Collection is not sorted');
        expect(myList.get(1)).to.equal( 9, 'Collection is not sorted');
    });
    it('Test with negative index - GET', function () {
        myList.add(5);
        myList.add(9);
        expect(()=> myList.get(-1)).to.throw(Error);
    });
    it('Test with negative index - REMOVE', function () {
        myList.add(5);
        myList.add(9);
        expect(()=> myList.remove(-1)).to.throw(Error);
    });
    it('Test with outside index - GET', function () {
        myList.add(5);
        myList.add(9);
        expect(()=> myList.get(5)).to.throw(Error);
    });
    it('Test with outside index - REMOVE', function () {
        myList.add(5);
        myList.add(9);
        expect(()=> myList.remove(5)).to.throw(Error);
    });
    it('should NOT REMOVE with empty collection', function () {
        expect(()=> myList.remove(0)).to.throw(Error);
    });
    it('should NOT GET with empty collection', function () {
        expect(()=> myList.get(0)).to.throw(Error);
    });
    it('Test SIZE', function () {
        myList.add(3);
        myList.add(5);
        myList.add(7);
        myList.add(9);
        expect(myList.size).to.equal(4, 'Size is NOT correct');
        myList.remove(1);
        myList.remove(1);
        expect(myList.size).to.equal(2, 'Size is NOT correct');
        myList.add(2);
        myList.add(4);
        myList.add(6);
        myList.add(8);
        expect(myList.size).to.equal(6, 'Size is NOT correct');
    });
});

