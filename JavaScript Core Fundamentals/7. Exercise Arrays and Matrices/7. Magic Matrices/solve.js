function f(matrix) {
    let rowSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (i !== 0 && rowSum !== matrix[i].reduce((a, b) => a + b)) {
            console.log(false);
            return;
        } else {
            rowSum = matrix[i].reduce((a, b) => a + b);

        }
    }
    console.log(true);
}

f([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

console.log();

f([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

console.log();

f([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);
