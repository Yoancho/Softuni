function smallest(arr) {
    [arr].map(Number);
    arr.sort((a, b) => a-b);
    let result = arr.slice(0,2);
    return result.join(" ");
}
console.log(smallest(['10', '15', '20', '5']));