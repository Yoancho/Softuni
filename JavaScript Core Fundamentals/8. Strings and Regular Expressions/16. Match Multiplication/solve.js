function f(str) {
    let regex = /[-\d]+[ ]*[*][ ]*[-\d.]+/gm;

    let test = str.match(regex);

    for (let e of test) {
        let num = e.split('*');
        let sum = parseFloat(num[0]) * parseFloat(num[1]);
        str = str.replace(e, sum);

    }

    console.log(str);
}

f('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')