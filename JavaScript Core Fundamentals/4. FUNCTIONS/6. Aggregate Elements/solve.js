function f(arr) {

    let sum = arr.reduce((a, b) => a + b);
    let b = arr.map(x => 1/x);
    b = b.reduce((a, b) => a+b);
    let c = '';

    c = arr.join('');

    console.log(sum);
    console.log(b);
    console.log(c);
}

f([1, 2, 3]);
f([2, 4, 8, 16]);