function f(matrix) {
    let max = [];
    matrix.forEach(function (e) {
        e.forEach(e => max.push(Math.max(e)))
    });
    console.log(max.sort((a,b) => b-a).slice(0, 1).join(''));
}


f([[20, 50, 10],
    [8, 33, 145]]);

console.log();

f([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);