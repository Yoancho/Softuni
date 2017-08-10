
function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let list = createList();
list.add(1);
list.add("two");
list.add(3);
console.log(`list = [${list}]`);
list.shiftLeft();
console.log("shifted left <--");
console.log(`list = [${list}]`);
list.add(["four"]);
console.log(`list = [${list}]`);
list.shiftRight();
console.log("shifted right -->");
console.log(`list = [${list}]`);
console.log(`Swaping [0] and [3]: ${list.swap(0,3)}`);
console.log(`list = [${list}]`);
console.log(`Swaping [1] and [1]: ${list.swap(1,1)}`);
console.log(`list = [${list}]`);

//---------------------------------------------

let expect = require('chai').expect;


describe("createList", function() {
    let myList;

    beforeEach(function() {
        myList = new createList();
    });
    // it('should have all functions in prototype', function () {
    //     expect(createList.prototype.hasOwnProperty('add')).to.equal(true, 'Function add() - not found');
    //     expect(createList.prototype.hasOwnProperty('shiftLeft')).to.equal(true, 'Function shiftLeft() - not found');
    //     expect(createList.prototype.hasOwnProperty('shiftRight')).to.equal(true, 'Function shiftRight() - not found');
    //
    //     expect(createList.prototype.hasOwnProperty('swap')).to.equal(true, 'Function swap() - not found');
    //     expect(createList.prototype.hasOwnProperty('toString')).to.equal(true, 'Function toString() - not found');
    // });
    it('should work ADD functions', function () {
        myList.add('Pesho');
        expect(myList.toString()).to.equal('Pesho', 'Element is NOT added');
    });
    it('should work ADD many elements functions', function () {
        myList.add('9');
        myList.add(6);
        myList.add('3');
        myList.add(5);
        expect(myList.toString()).to.equal( '9, 6, 3, 5', 'Element is NOT added');
    });
    it('Test shiftRight() function', function () {
        myList.add(9);
        myList.add(2);
        myList.add(6);
        myList.add('3');
        myList.shiftRight();
        expect(myList.toString()).to.equal( '3, 9, 2, 6', 'shiftRight() - not work');
    });
    it('Test shiftLeft() function', function () {
        myList.add(9);
        myList.add(2);
        myList.add(6);
        myList.add('3');
        myList.shiftLeft();
        expect(myList.toString()).to.equal( '2, 6, 3, 9', 'shiftLeft() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(0, 3);
        expect(myList.toString()).to.equal( 'four, two, 3, 1', 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(0, 3);
        expect(myList.swap(0,3)).equal(true, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(-2, 3);
        expect(myList.swap(-2,3)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(2.5, 3);
        expect(myList.swap(2.5,3)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(4, 3);
        expect(myList.swap(4,3)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(3, 3);
        expect(myList.swap(3,3)).equal(false, 'swap() - not work');
    });

    //===== Right


    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(0, -3);
        expect(myList.swap(0, -3)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(0, 3.5);
        expect(myList.swap(0,3.5)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(0, 4);
        expect(myList.swap(0,4)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap(3, 3);
        expect(myList.swap(3,3)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap('pesho', 3);
        expect(myList.swap('pesho',3)).equal(false, 'swap() - not work');
    });
    it('Test swap(index1, index2) function', function () {
        myList.add(1);
        myList.add('two');
        myList.add(3);
        myList.add('four');
        myList.swap('pesho', 'gosho');
        expect(myList.swap('pesho', 'gosho')).equal(false, 'swap() - not work');
    });
});
    // it('should be sorted after REMOVing function', function () {
    //     myList.add(9);
    //     myList.add(2);
    //     myList.add(6);
    //     expect(myList.get(0)).to.equal( 2, 'Collection is not sorted');
    //     myList.remove(0);
    //     expect(myList.get(0)).to.equal( 6, 'Collection is not sorted');
    //     expect(myList.get(1)).to.equal( 9, 'Collection is not sorted');
    // });
    // it('Test with negative index - GET', function () {
    //     myList.add(5);
    //     myList.add(9);
    //     expect(()=> myList.get(-1)).to.throw(Error);
    // });
    // it('Test with negative index - REMOVE', function () {
    //     myList.add(5);
    //     myList.add(9);
    //     expect(()=> myList.remove(-1)).to.throw(Error);
    // });
    // it('Test with outside index - GET', function () {
    //     myList.add(5);
    //     myList.add(9);
    //     expect(()=> myList.get(5)).to.throw(Error);
    // });
    // it('Test with outside index - REMOVE', function () {
    //     myList.add(5);
    //     myList.add(9);
    //     expect(()=> myList.remove(5)).to.throw(Error);
    // });
    // it('should NOT REMOVE with empty collection', function () {
    //     expect(()=> myList.remove(0)).to.throw(Error);
    // });
    // it('should NOT GET with empty collection', function () {
    //     expect(()=> myList.get(0)).to.throw(Error);
    // });
    // it('Test SIZE', function () {
    //     myList.add(3);
    //     myList.add(5);
    //     myList.add(7);
    //     myList.add(9);
    //     expect(myList.size).to.equal(4, 'Size is NOT correct');
    //     myList.remove(1);
    //     myList.remove(1);
    //     expect(myList.size).to.equal(2, 'Size is NOT correct');
    //     myList.add(2);
    //     myList.add(4);
    //     myList.add(6);
    //     myList.add(8);
    //     expect(myList.size).to.equal(6, 'Size is NOT correct');
    // });
//});




