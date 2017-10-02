function draw([n]) {
    [n] = [n].map(Number);
    let dash = '-';
    let sp = ' ';
    let inner = n - 2;
    if (n % 2 == 0) {
        n -= 1;
    }
    if (n <= 2) {
        n = 3;
    }

    for (let i = 0; i < n; i++) {

        if (i == 0 || i == n - 1 || i ==(n - 1) / 2) {
            console.log(`+${dash.repeat(inner)}+${dash.repeat(inner)}+`);
        }
        else {
            console.log(`|${sp.repeat(inner)}|${sp.repeat(inner)}|`);
        }
    }

}
draw(['4']);
draw(['5']);
draw(['6']);
draw(['7']);