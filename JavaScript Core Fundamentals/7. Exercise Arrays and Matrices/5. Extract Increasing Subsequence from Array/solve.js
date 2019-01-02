function f(arr) {

    let max = Number.NEGATIVE_INFINITY;
    let result = [];
    arr = arr.filter(onlyUnique);

    for (let i = 0; i < arr.length; i++) {
        if ( max < arr[i]) {
            result.push(arr[i]);
            max = arr[i]
        }
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    console.log(result.join('\n'))
}


f([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log()
f([20, 3, 2, 15, 6, 1]);