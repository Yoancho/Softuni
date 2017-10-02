function equalNeighborsCount(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let neighbors = 0;
    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                neighbors++;
            }
            else if (matrix[row][col] == matrix[row][col+1]){
                neighbors++;
            }
        }
    }
    return neighbors;
}
//console.log(equalNeighborsCount(['2 3 4 7 0','4 0 5 3 4','2 3 5 4 2','9 8 7 5 4']));
//console.log(equalNeighborsCount(['test yes yo ho','well done yo 6','not done yet 5']));
console.log(equalNeighborsCount(['2 2 5 7 4',
                                 '4 0 5 3 4',
                                 '2 5 5 4 2']));