function f(array) {
    let arr = array.map(Number);
    let last = -Infinity;
    for (let obj of arr) {
        if (obj > last) {
            console.log(obj)
            last = obj;
        }
    }

}


f([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log()
f([20, 3, 2, 15, 6, 1]);