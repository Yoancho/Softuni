function f(airMap, airForces) {

    let matrix = [];
    airMap.forEach(e => {
        matrix.push(e.split(' ').filter(a => a !== '').map(Number));
    });

    for (let el of airForces) {
        let [force, index] = el.split(' ').filter(e => e !== '');
        index = Number(index);
        switch (force) {
            case 'breeze': {
                let row = [];
                matrix[index].forEach(e => {
                    if (e - 15 >= 0) {
                        row.push(e - 15)
                    } else row.push(0);
                });
                matrix[index] = row;
                break
            }
            case 'gale': {
                for (let i = 0; i < matrix.length; i++) {
                    if (matrix[i][index] - 20 >= 0) {
                        matrix[i][index] = matrix[i][index] - 20;
                    } else  matrix[i][index] = 0;

                }
                break
            }
            case 'smog': {
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] = matrix[i][j] + index;
                    }
                }
                break
            }
        }
    }
    let pollutedArea = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                pollutedArea.push('[' + i + '-' + j + ']')
            }
        }
    }
    if (pollutedArea.length > 0) {
        console.log(`Polluted areas: ${pollutedArea.join(', ')}`);
    } else {
        console.log('No polluted areas');
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