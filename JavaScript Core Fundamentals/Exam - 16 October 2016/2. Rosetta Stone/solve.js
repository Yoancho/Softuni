function f(arr) {
    let n = Number(arr.shift());
    let templateMatrix = arr.splice(0, n);
    let messageMatrix = [];

    for (let i = 0; i < templateMatrix.length; i++) {
        templateMatrix[i] = templateMatrix[i].split(' ').map(Number);
    }
    for (let i = 0; i < arr.length; i++) {
        messageMatrix.push(arr[i].split(' ').map(Number));
    }
  //  console.log(messageMatrix);
    let templateMartixRows = n;
    let templateMartixCols = templateMatrix[0].length;


    for (let row = 0; row < messageMatrix.length; row += templateMartixRows) {
        for (let col = 0; col < messageMatrix[row].length; col += templateMartixCols) {
            for (let i = 0; i < templateMatrix.length; i++) {
                for (let j = 0; j < templateMatrix[i].length; j++) {
                    let targetRow = row + i;
                    let targetCol = col + j;

                    if (targetRow < messageMatrix.length && targetCol < messageMatrix[row].length) {
                        let char = messageMatrix[targetRow][targetCol] + templateMatrix[i][j];

                        char %= 27;
                        if (char === 0) {
                            messageMatrix[targetRow][targetCol] = ' ';
                        } else {
                            messageMatrix[targetRow][targetCol] = String.fromCharCode(char + 64);
                        }
                    }
                }

            }
        }
    }
    //console.log(messageMatrix);
    let str = '';
    messageMatrix.forEach(e => {
        e.forEach(s => str += s);
    });
    console.log(str);

}


f(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);


console.log();

f([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);
console.log();

f([`1`
,`1 3 13`
,`12 22 14 13 25 0 4 24 23`
,`18 24 2 25 22 0 0 11 18`
,`8 25 6 26 8 23 13 4 14`
,`14 3 14 10 6 1 6 16 14`
,`11 12 2 10 24 2 13 24 0`
,`24 24 10 14 15 25 18 24 12`
,`4 24 0 8 4 22 19 22 14`
,`0 11 18 26 1 19 18 13 15`
,`8 15 14 26 24 14 26 24 14`]);