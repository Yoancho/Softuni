function concateAndReverse(arr) {
    let res = arr.join("").split("").reverse().join("");
    console.log(res);
}
concateAndReverse(['I', 'am', 'student']);