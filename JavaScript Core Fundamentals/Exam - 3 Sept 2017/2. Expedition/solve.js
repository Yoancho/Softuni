function f(primaryMatrix, secondaryMatrix, overlayCoordinates, startingCoordinates) {


    for (let overlay = 0; overlay < overlayCoordinates.length; overlay++) {
        let overlayX = overlayCoordinates[overlay][0];
        let overlayY = overlayCoordinates[overlay][1];

        let endRow = secondaryMatrix.length + overlayX;
        let endCol = secondaryMatrix[0].length + overlayY;
        for (let row = overlayX, secondaryMatrixRow = 0; row < endRow; row++, secondaryMatrixRow++) {
            for (let col = overlayY, secondaryMatrixCol = 0; col < endCol; col++, secondaryMatrixCol++) {
                if (row < primaryMatrix.length && col < primaryMatrix[0].length) {
                    let primaryMatrixValue = primaryMatrix[row][col];
                    if (secondaryMatrixRow < secondaryMatrix.length && secondaryMatrixCol < secondaryMatrix[secondaryMatrixRow].length) {
                        if (secondaryMatrix[secondaryMatrixRow][secondaryMatrixCol] === 1) {
                            if (primaryMatrixValue === 1) {
                                primaryMatrix[row][col] = 0
                            } else if (primaryMatrixValue === 0) {
                                primaryMatrix[row][col] = 1
                            }
                        }
                    }

                }
            }

        }
    }


    let stepsCount = 1;
    let currentPosition = [startingCoordinates[0], startingCoordinates[1]];
    let lastMove;

    while (true) {
        if (currentPosition[0] + 1 < primaryMatrix.length && primaryMatrix[currentPosition[0] + 1][currentPosition[1]] == 0 && lastMove != "up") {
            currentPosition = [currentPosition[0] + 1, currentPosition[1]];
            lastMove = "down";
        } else if (currentPosition[1] + 1 < primaryMatrix[0].length && primaryMatrix[currentPosition[0]][currentPosition[1] + 1] == 0 && lastMove != "left") {
            currentPosition = [currentPosition[0], currentPosition[1] + 1];
            lastMove = "right";
        } else if (currentPosition[0] > 0 && primaryMatrix[currentPosition[0] - 1][currentPosition[1]] == 0 && lastMove != "down") {
            currentPosition = [currentPosition[0] - 1, currentPosition[1]];
            lastMove = "up";
        } else if (currentPosition[1] > 0 && primaryMatrix[currentPosition[0]][currentPosition[1] - 1] == 0 && lastMove != "right") {
            currentPosition = [currentPosition[0], currentPosition[1] - 1];
            lastMove = "left";
        } else {
            break;
        }
        stepsCount++;
    }

    console.log(stepsCount);
    definePosition(currentPosition);

    function definePosition(currentPosition) {
        let currentRow = currentPosition[0];
        let currentCol = currentPosition[1];
        if (currentRow == 0) {
            console.log("Top");
        } else if (currentRow == primaryMatrix.length - 1) {
            console.log("Bottom");
        } else if (currentCol == 0) {
            console.log("Left");
        } else if (currentCol == primaryMatrix[0].length - 1) {
            console.log("Right");
        } else if (currentRow < primaryMatrix.length / 2 && currentCol >= primaryMatrix[0].length / 2) {
            console.log("Dead end 1");
        } else if (currentRow < primaryMatrix.length / 2 && currentCol < primaryMatrix[0].length / 2) {
            console.log("Dead end 2");
        } else if (currentRow >= primaryMatrix.length / 2 && currentCol < primaryMatrix[0].length / 2) {
            console.log("Dead end 3");
        } else if (currentRow >= primaryMatrix.length / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 4");
        }
    }
}



// f([[1, 1, 0, 1, 1, 1, 1, 0],
//         [0, 1, 1, 1, 0, 0, 0, 1],
//         [1, 0, 0, 1, 0, 0, 0, 1],
//         [0, 0, 0, 1, 1, 0, 0, 1],
//         [1, 0, 0, 1, 1, 1, 1, 1],
//         [1, 0, 1, 1, 0, 1, 0, 0]],
//     [[0, 1, 1],
//         [0, 1, 0],
//         [1, 1, 0]],
//     [[1, 1],
//         [2, 3],
//         [5, 3]],
//     [0, 2]);
//
// console.log()
//
// f([[1, 1, 0, 1],
//         [0, 1, 1, 0],
//         [0, 0, 1, 0],
//         [1, 0, 1, 0]],
//     [[0, 0, 1, 0, 1],
//         [1, 0, 0, 1, 1],
//         [1, 0, 1, 1, 1],
//         [1, 0, 1, 0, 1]],
//     [[0, 0],
//         [2, 1],
//         [1, 0]],
//     [2, 0]);


console.log()

f([[1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 1]],
    [[0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1]],
    [[0, 0],
        [3, 2],
    [3, 0],
    [2, 0],
    ['S','T','O','P'],
    [1, 0]]);




