function f(y, m, d) {
    d = Number(d+1);
    let date = new  Date(y, m-1, d);
    console.log(date.toLocaleDateString())
}

(f(2016, 9, 30));