function f(arr) {
    let rotateCount = arr.pop();

    for (let i = 0; i < rotateCount % arr.length; i++) {
        let tmp = arr.pop();
        arr.unshift(tmp)
    }
console.log(arr.join(' '));
}


f(['1', '2', '3', '4', '2']);
console.log();
f(['Banana', 'Orange', 'Coconut', 'Apple', '15']);