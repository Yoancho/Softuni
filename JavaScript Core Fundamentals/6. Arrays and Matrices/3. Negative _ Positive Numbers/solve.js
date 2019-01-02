function f(arr) {
    let result = [];
    for (let el of arr) {
       if (el >= 0){
           result.push(el)
       } else {
           result.unshift(el)
       }
    }
    console.log(result.join('\n'))
}

//f([7, -2, 8, 9]);
f([3, -2, 0, -1]);