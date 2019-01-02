function f(arr) {
    let numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
            if (i === arr.length - 1) {
                console.log('Error: too many operands!');
                return;
            }
        } else {

            let operator = arr[i];

            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }


            switch (operator) {
                case '+' : {
                    let index = numbers.length-2;
                    let a = numbers.pop();
                    let b = numbers.pop();
                    numbers.splice(index, 2, b + a);
                    break
                }
                case '-' : {
                    let index = numbers.length-2;
                    let a = numbers.pop();
                    let b = numbers.pop();
                    numbers.splice(index, 2, b - a);
                    break
                }
                case '*' : {
                    let index = numbers.length-2;
                    let a = numbers.pop();
                    let b = numbers.pop();
                    numbers.splice(index, 2, b * a);
                    break
                }
                case '/' : {
                    let index = numbers.length-2;
                    let a = numbers.pop();
                    let b = numbers.pop();
                    numbers.splice(index, 2, b / a);
                    break
                }
                default :
                    break
            }
        }
    }
    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(numbers.join(''));
    }
}

f([3, 4, '+']);
console.log();

f([5, 3, 4, '*', '-']);
console.log();

f([7, 33, 8, '-']);
console.log();

f([31, 2, '+', 11, '/']);
console.log();

f([15, '/']);
console.log();

f([-1, 1, '+', 101, '*', 18, '+', 3, '/']);