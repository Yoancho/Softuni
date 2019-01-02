function f(str) {
    for (let i = 0; i <= 7; i++) {

        let tmp = Array.from(str.toString()).map(Number);
        let avrg = Number(tmp.reduce((a, b) => a + b)) / tmp.length;

        if (avrg <= 5) {
            str += '9';
        }
    }
    console.log(str)
}

f(101);
f(5835)