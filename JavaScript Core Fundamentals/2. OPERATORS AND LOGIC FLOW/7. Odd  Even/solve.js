function f(num) {
    num = Math.abs(num);
    if (num % 2 === 0){
        console.log('even')
    } else if (num % 2 === 1){
        console.log('odd');
    } else {
        console.log('invalid')
    }
}

f(5)
f(8)
f(1.5)