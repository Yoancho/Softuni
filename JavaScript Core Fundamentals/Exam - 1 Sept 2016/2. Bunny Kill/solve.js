function f(matrix) {


    function explode(row, col, matrix) {
        let bunnyDamage = matrix[row][col];
        for (var i = 0; i < col.length; i++) {
            for (var j = 0; j < col.length; j++) {
                if (isInside(i, j, matrix)) {
                    matrix[i][j] -= bunnyDamage;
                }
            }
        }
    }

    function isInside(row, col, matrix) {
        return row >= 0
            && row < matrix.length
            && col >= 0
            && col < matrix[row].length;
    }


    // let startRow = Math.max(0, row - 1);
    // let endRow = Math.min(matrix.length, row + 1);
    // let startCol = Math.max(0, col - 1);
    // let endCol = Math.min(matrix[row].length, col + 1)

}