function f(arr) {
 let n = arr.pop();
    for (let i = 0; i < arr.length; i++) {
        if (i % n === 0){
            console.log(arr[i]);
        }
    }
}

f([5, 20, 31, 4, 20, 2]);
f(['dsa', 'asd', 'test', 'tset', 2]);
