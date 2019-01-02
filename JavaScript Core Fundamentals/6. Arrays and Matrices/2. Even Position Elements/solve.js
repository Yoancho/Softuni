function f(arr) {
    let result = [];
    arr.forEach(function (e, i) {
       if(i % 2 === 0) { result.push(e) }
    })
    console.log(result.join(' '))
}

f(['20', '30', '40']);
f(['5', '10']);