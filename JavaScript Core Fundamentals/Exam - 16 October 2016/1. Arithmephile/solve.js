function f(arr) {

    let sum = [];
    arr = arr.map(Number);

    for (var i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (n >= 0 && n < 10) {
            let start = i + 1;
            let end = start + n;
            if (end > arr.length) {
                end = arr.length
            }
            let tmp = arr.slice(start, end);
            if (tmp.length > 0) {
                tmp = tmp.reduce((a, b) => a * b);
                sum.push(tmp);
            }
        }
    }
    sum = sum.sort((a, b) => b - a);
    console.log(sum[0]);
}


f(['10', '20', '2', '30', '44', '3', '56', '20', '24']);
f(['100', '200', '2', '3', '2', '3', '2', '1', '1']);