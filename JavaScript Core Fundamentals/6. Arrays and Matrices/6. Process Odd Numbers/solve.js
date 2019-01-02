function f(arr) {
    let result = [];

    arr.forEach(function (e, i) {
        if (i % 2 === 1 ){
            result.push(e*2);
        }
    });
result.reverse();
    console.log(result.join(' '));
}

f([10, 15, 20, 25]);
f([3, 0, 10, 4, 7, 3]);