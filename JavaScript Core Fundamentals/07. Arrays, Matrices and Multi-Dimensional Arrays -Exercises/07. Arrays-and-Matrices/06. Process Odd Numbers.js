function processNum(arr) {
    let result = arr.filter((arr, i) => i % 2 == 1).map(x=> 2*x).reverse();
    return result.join(" ");
}
console.log(processNum([10,15,20,25]));