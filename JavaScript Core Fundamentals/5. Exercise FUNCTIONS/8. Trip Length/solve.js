function f([x1, y1, x2, y2, x3, y3]) {

    let x = Array(x1, x2, x3).sort().reduce((a, b) => Math.abs(b) - Math.abs(a));

    let A = {x: x1, y: y1};
    let B = {x: x2, y: y2};
    let C = {x: x3, y: y3};

    let min = returnMin(A, B, C);

    function returnMin(a, b, c) {
        if ((a.x + a.y) < (b.x + b.y) && (a.x + a.y) < (c.x + c.y)) {
            return "A";
        } else if ((b.x + b.y) < (a.x + a.y) && (b.x + b.y) < (c.x + c.y)) {
            return "B";
        } else if ((c.x + c.y) < (a.x + a.y) && (b.x + b.y) > (c.x + c.y)) {
            return "C";
        }
    }


    let dA = Math.pow(A.x + A.y, 2);
    let dB = Math.pow(B.x + B.y, 2);
    let dC = Math.pow(C.x - C.y, 2);


    let sideA = Math.sqrt(dA + dB);
    let sideB = Math.sqrt(dB + dC);
    let sideC = Math.sqrt(dC + dA);
    console.log(sideA);
    // console.log(sideB);
    // console.log(sideC);
    console.log('----------------------');

}


//f([0, 0, 2, 0, 4, 0]);
f([5, 1, 1, 1, 5, 4]);
f([0, 3, 1, 0, -1, 0]);