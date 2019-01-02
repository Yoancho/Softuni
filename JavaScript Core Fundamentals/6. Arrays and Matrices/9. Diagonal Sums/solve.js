function f(matrix) {
    let main = 0;
    let secondary = 0;

    for (let row = 0; row < matrix.length; row++) {
        main += matrix[row][row];
        secondary += matrix[row][matrix[row].length-1 - row]
    }
    console.log(main + ' ' + secondary);
}


f([[20, 40],
    [10, 60]]
);

console.log();


f([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);