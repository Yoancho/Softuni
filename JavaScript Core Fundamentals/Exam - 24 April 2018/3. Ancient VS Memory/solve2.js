function f(arr) {
    let str = arr.join(' ').replace(/0?\s0\s0?/gm, ' ').split('  ').filter(e => e !== '');
    for (let row of str) {
        if (/32656 19759 32763 ?([0-9]+) ?(.+)$/gm.test(row)) {
            let chars = /32656 19759 32763 ?([0-9]+) ?(.+)$/gm.exec(row)[2].split(' ');
            console.log(chars.map(e => String.fromCharCode(e)).join(''));
        }
    }
}


f(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);

console.log();


f([]);

console.log();

f([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'

])