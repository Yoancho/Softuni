function f(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let seq = result.slice(-k).reduce((a,b) => a+b);
        result.push(seq);
    }
    console.log(result.join(' '));
}

f(6, 3);
f(8, 2);