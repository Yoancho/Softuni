function f(matrix, arr) {
    let matrixNumber = [];
    for (let row of matrix) {
        row = row.split(' ').map(Number);
        matrixNumber.push(row);
    }

    for (let words  of arr) {
        let [w, n] = words.split(' ');
        n = Number(n);
        switch (w) {
            case 'breeze' : {
                matrixNumber[n] = matrixNumber[n].map(e => {
                    if (e - 15 > 0) {
                        return e - 15;
                    } else {
                        return 1;
                    }
                });
                break
            }
            case  'gale' : {
                for (let i = 0; i < matrixNumber.length; i++) {
                    if (matrixNumber[i][n] - 20 > 0) {
                        matrixNumber[i][n] = matrixNumber[i][n] - 20;
                    } else {
                        matrixNumber[i][n] = 1
                    }
                }
                break
            }
            case  'smog' : {
                for (let i = 0; i < matrixNumber.length; i++) {
                    matrixNumber[i] = matrixNumber[i].map(e => e + n);
                }
                break
            }
        }
    }

    let indexOfRowMax = [];

    for (let i = 0; i < matrixNumber.length; i++) {
        for (let j = 0; j < matrixNumber.length; j++) {
            if (matrixNumber[i][j] >= 50) {
                indexOfRowMax.push(` [${i}-${j}]`)
            }
        }
    }
    if (indexOfRowMax.length > 0) {
        console.log(`Polluted areas:${indexOfRowMax}`);
    } else {
        console.log("No polluted areas")
    }
}


f([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]);


console.log();

f([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]);

console.log();

f([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]);