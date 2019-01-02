function f(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentRow = JSON.parse(arr[i]).map(Number).sort((a, b) => b - a);
        let currentSum = currentRow.reduce((a, b) => a + b);

        if (!result.find(array => array.reduce((a, b) => a+b)=== currentSum)){
            result.push(currentRow);
        }
    }

    result.sort((a, b) => a.length - b.length).forEach(e => console.log(`[${e.join(', ')}]`))

}


f(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);
console.log();
f([`[7.14, 7.180, 7.339, 80.099]`,
    `[7.339, 80.0990, 7.140000, 7.18]`,
    `[7.339, 7.180, 7.14, 80.099]
`]);