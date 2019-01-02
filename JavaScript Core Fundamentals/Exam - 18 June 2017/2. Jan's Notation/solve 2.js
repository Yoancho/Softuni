function solve(arr) {
    let operators = {
        '+': function (a, b) {
            return Number(a) + Number(b);
        },
        '-': function (a, b) {
            return Number(a) - Number(b);
        },
        '*': function (a, b) {
            return Number(a) * Number(b);
        },
        '/': function (a, b) {
            return Number(a) / Number(b);
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {

            let a = arr[i - 2];
            let b = arr[i - 1];
            let lastInteration = false;
            if (arr.length - 1 == i) {
                lastInteration = true
            }

            let op = operators[arr[i]](a, b);

            arr.splice((i - 2), 3, op);

            if (isNaN(op)) {
                return ('Error: not enough operands!');
                break;
            }
            if (lastInteration && arr.length > 1) {
                return ('Error: too many operands!');
                break;
            }
            i = 0;
        }

    }
    return arr.toString();
}