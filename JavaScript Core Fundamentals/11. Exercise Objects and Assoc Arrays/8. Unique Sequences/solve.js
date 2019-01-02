function f(arr) {
    let result = new Set();
    for (let i = 0; i < arr.length; i++) {
        let tmp = JSON.parse(arr[i]).sort().toString();

        if (!result.has(tmp)) {
            result.add(tmp)
        }
    }
    result = Array.from(result).sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return 0
        }
    });
    for (let k of result) {
        let d = (k.split(',').filter(e => e !== '').map(e => Number(e)).sort((a, b) => b - a));
        console.log(`[${d.join(', ')}]`);
        let t;
    }
}


f(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);
console.log();
f([`[7.14, 7.180, 7.339, 80.099]`,
    `[7.339, 80.0990, 7.140000, 7.18]`,
    `[7.339, 7.180, 7.14, 80.099]
`]);