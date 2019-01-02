function f(arr) {
    console.log(arr
        .filter((e, i) => i % 2 === 1)
        .map(a => a * 2)
        .reverse()
        .join(' '));
}

f([10, 15, 20, 25]);
f([3, 0, 10, 4, 7, 3]);