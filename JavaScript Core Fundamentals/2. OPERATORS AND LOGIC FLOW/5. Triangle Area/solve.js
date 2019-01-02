function f(a, b, c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    console.log(area);
}

f(4, 13, 15);
f(2, 3.5, 4);