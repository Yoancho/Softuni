function average(n) {
    let average = true;
    let num = n.toString();
    while(average < 5) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            let item = Number(num[i]);
            sum += item;
        }
        average = sum / num.length;
        if (average > 5) {break;}
        num += 9;
    }
    console.log(num);
}
average([101]);
average([5835]);