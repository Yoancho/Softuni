function f(arr) {
    let result = [];
    for (let i = 1; i <= arr.length; i++) {
           if (arr[i-1] == 'add'){
               result.push(i);
           } else if (arr[i-1] === 'remove') {
               result.pop();
           }
    }
    if (result.length == 0){
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }
}


f(["add", "add", "add", "add"]);
console.log();
f(['add', "add", "remove", "add", "add"]);