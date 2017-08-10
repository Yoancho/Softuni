function square(n) {
    [n] = [n].map(Number);
    for (let i = 0; i < n; i++){
        console.log('* '.repeat(n));
    }
}
square(900);