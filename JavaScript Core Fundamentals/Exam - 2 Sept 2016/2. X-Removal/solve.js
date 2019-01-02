function f(arr) {
    let result = arr.map(e => Array.from(e));
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j + 2] !== undefined && arr[i + 2][j] !== undefined && arr[i + 1][j] !== undefined && arr[i + 2][j + 2] !== undefined) {
                if (arr[i][j].toLowerCase() == arr[i][j +2].toLowerCase() && arr[i][j].toLowerCase() == arr[i + 1][j+1].toLowerCase() && arr[i][j].toLowerCase() == arr[i + 2][j].toLowerCase() && arr[i][j].toLowerCase() == arr[i + 2][j+2].toLowerCase()) {

                    // result[i] = arr[i].replace(arr[i][j], '').replace(arr[i][j + 2], '');
                    // result[i + 1] = arr[i + 1].replace(arr[i + 1][j + 1], '');
                    // result[i + 2] = arr[i + 2].replace(arr[i + 2][j], '').replace(arr[i + 2][j + 2], '');
                    result[i][j] = result[i][j + 2] = result[i + 1][j + 1] = result[i + 2][j] = result[i + 2][j + 2] = "";
                }
            }
        }
    }
    for (let row of result) {
        console.log(row.join(''));
    }
}


f([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv']);

console.log(
    `anjs
     xoa
     Amh
     aaa
     aavvvv`);
console.log();


f([
    '8888888'
    ,'08*8*80'
    ,'808*888'
    ,'0**8*8?']);
console.log();

f([
   'puoUdai'
   ,'miU'
   ,'ausupirina'
   ,'8n8i8'
   ,'m8o8a'
   ,'8l8o860'
   ,'M8i8'
   ,'8e8!8?!']);