function f(arr) {
    let num = Number(arr[0]);
    let totalAmount = 0;
    let days = 0;

    while (num >= 100) {
        totalAmount += (num - 26);
        num -= 10;
        days++
    }
    if (days != 0) {
        totalAmount -= 26;
        console.log(days);
        console.log(totalAmount);
    } else {
        console.log(days);
        console.log(totalAmount);
    }

}


f(['111']);
f(['450']);
f(['200']);
