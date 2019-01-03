function f(dataRows) {
    let matrix = [];

    for (var i = 0; i < dataRows.length - 1; i++) {
        matrix.push(dataRows[i].split(' ').map(Number));
    }
    let coordinates = dataRows[dataRows.length - 1].split(' ');
    let bunnyDamage = 0;
    let bunnyKils = 0;
    for (let token of coordinates) {
        let [row, col] = token.split(',').map(Number);
        if (matrix[row][col] > 0){
            bunnyDamage += matrix[row][col];
            bunnyKils++;
            explode(row, col, matrix);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0){
                bunnyDamage += matrix[i][j];
                bunnyKils++;
            }
        }
    }

    console.log(bunnyDamage);
    console.log(bunnyKils);


    function explode(row, col, matrix) {
        // let startRow = Math.max(0, row - 1);
        // let endRow = Math.min(matrix.length, row + 1);
        // let startCol = Math.max(0, row - 1);

        let bunnyDamage = matrix[row][col];

        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (isInside(i, j, matrix)) {
                    matrix[i][j] -= bunnyDamage;
                }
            }
        }
    }

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }

}


f([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);

console.log();

f([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);