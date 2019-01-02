function f(arr) {
    let n = Number(arr.pop());
    arr = (arr.filter((e, i) => i % n == 0).join('\n'));
    return console.log(arr);
}


f([5, 20, 31, 4, 20, 2]);
f(['dsa', 'asd', 'test', 'tset', 2]);
