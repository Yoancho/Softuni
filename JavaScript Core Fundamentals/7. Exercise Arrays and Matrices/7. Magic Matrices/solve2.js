function f(arr) {
    let count = 0;
    let isMagic = true;
    for (let row = 0; row < arr.length; row++) {
        let colSum = 0;
        let rowSum = 0;

        for (let col = 0; col < arr[row].length; col++) {
            colSum += arr[row][col];
        }
        for ( rowFromCol = 0; rowFromCol < arr.length; rowFromCol++) {
            rowSum += arr[rowFromCol][count];
        }
        if(rowSum != colSum) {
            isMagic = false;
        }

        count++;
    }
    console.log(isMagic);
}


f([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

console.log();

f([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

console.log();

f([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);