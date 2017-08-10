let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


//
// console.log(`list = [${list}]`);
// list.add(1);
// console.log(`list = [${list}]`);
// list.add("two");
// list.add(3);
// console.log(`list = [${list}]`);
// console.log("deleted: " + list.delete(1));
// console.log(`list = [${list}]`);
// console.log("cannot delete: " + list.delete(-1));
// console.log(`list = [${list}]`);

//-----------------------------------------------


let expect = require('chai').expect;


describe("List function", function() {
    let myList;

    beforeEach(function() {
        myList = list;
    });
    it('should work ADD functions', function () {
        myList.add('Pesho');
        expect(myList.toString()).to.equal('Pesho', 'Element is NOT added');
    });
    it('Test multi ADD  functions', function () {
        myList.add('Gosho');
        myList.add('Vania');
        myList.add(5);
        expect(myList.toString()).to.equal( 'Pesho, Gosho, Vania, 5', 'Element is NOT added');
    });
    it('Test REMOVE functions', function () {
        expect(myList.delete(3)).to.equal( 5, 'Element is NOT added');
    });
});
    // it('Test with negative index', function () {
    //     myList.delete(-1);
    //     expect(myList.delete(-1)).to.equal(undefined);
    // });
    // it('Test with outside index', function () {
    //     myList.delete(8);
    //     expect(myList.delete(8)).to.equal(undefined);
    // });
    // it('Test with floating point index', function () {
    //     myList.delete(4.6);
    //     expect(myList.delete(4.6)).to.equal(undefined);
    // });
    // it('should work ADD functions', function () {
    //     myList.add('');
    //     expect(myList[2]).to.equal(undefined, 'Element is NOT added');
    // });
    // it('should work ADD functions', function () {
    //     myList.add([]);
    //     expect(myList[3]).to.equal(undefined, 'Element is NOT added');
    // });
    // it('should work ADD functions', function () {
    //     myList.add({});
    //     expect(myList[4]).to.equal(undefined, 'Element is NOT added');
    // });
//});