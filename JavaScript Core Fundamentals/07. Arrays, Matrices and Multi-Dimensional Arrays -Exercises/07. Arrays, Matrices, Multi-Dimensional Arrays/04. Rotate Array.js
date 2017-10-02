function rotate(arr) {
    let n = Number(arr.pop());
    n = n % arr.length;
    for (let i = 0; i < n; i++) {
        let temp = arr.splice(-1).toString();
        arr.unshift(temp);
    }
    console.log(arr.join(" "));
}