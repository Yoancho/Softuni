function makeList() {
    let data = [];
    return {
        addLeft: function (item) {
            data.unshift(item);
        }, addRight: function (item) {
            data.push(item);
        }, clear: function () {
            data = [];
        }, toString: function () {
            return data.join(", ");
        }
    };
}
module.exports = makeList;

// let list = makeList();
// console.log(`list = [${list}]`);
// list.addRight(1);
// list.addRight("two");
// list.addLeft(0);
// console.log(`list = [${list}]`);
// list.clear();
// list.addLeft("beer");