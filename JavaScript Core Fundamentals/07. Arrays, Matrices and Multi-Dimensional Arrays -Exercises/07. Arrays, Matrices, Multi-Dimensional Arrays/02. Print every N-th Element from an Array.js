function printEveryN(arr) {
    let n = Number(arr.pop());
    arr = (arr.filter((a,i) => i % n ==0).join('\n'));
    return console.log(arr);
}
printEveryN([1, 2, 3, 4, 5, 6]);