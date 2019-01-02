function f(matrix) {
    let max = -9999999999999;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > max){
                max = matrix[row][col];
            }
        }
    }
    console.log(max);
}


f([[20, 50, 10],
    [8, 33, 145]]);

console.log();

f([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);