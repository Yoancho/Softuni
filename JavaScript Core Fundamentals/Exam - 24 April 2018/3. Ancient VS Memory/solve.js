function f(arr) {
    let numArr = arr.join(' ').split(' ');
    let result = [];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === '32656' && numArr[i + 1] === '19759' && numArr[i + 2] === '32763') {
            let size = Number(numArr[i + 4]);
            let temp = numArr.slice(i + 6, i + 6 + size);
            console.log(temp.map(st => String.fromCharCode(st)).join(''));
        }
    }
    console.log(result.join(''));
}

f(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);

console.log();


f([]);