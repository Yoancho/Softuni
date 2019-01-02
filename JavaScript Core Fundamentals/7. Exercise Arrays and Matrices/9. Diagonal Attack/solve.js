function f(arr) {
    let matrix = [];

    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primaryDiagonal += matrix[row][col];

            }
            if (col === matrix[row].length - row - 1) {
                secondaryDiagonal += matrix[row][col];
            }
        }
    }

    // console.log(primaryDiagonal);
    // console.log(secondaryDiagonal);
    if (primaryDiagonal === secondaryDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix[row].length - row - 1) {
                    matrix[row][col] = primaryDiagonal;
                }
            }
        }
    }
    let result = matrix.map(row => row.join(' ')).join('\n');

    console.log(result);

}


f(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

console.log();
f(['1 1 1',
    '1 1 1',
    '1 1 0'])
