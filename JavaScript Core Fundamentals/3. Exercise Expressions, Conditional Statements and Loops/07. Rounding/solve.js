function f([num, precision]) {
    let i = num.toString().split('.')[1].length;
    if (i > precision) {
        console.log(num.toFixed(precision));
    } else {
        console.log(num)
    }

}

f([3.1415926535897932384626433832795, 2]);
f([10.5, 3]);