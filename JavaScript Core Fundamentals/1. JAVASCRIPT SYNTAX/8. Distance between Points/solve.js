function f(x1, y1, x2, y2) {
    let A = {x: x1, y: y1};
    let B = {x: x2, y: y2};

    let distanceX = Math.pow(A.x - B.x, 2);
    let distanceY = Math.pow(A.y - B.y, 2);
    return Math.sqrt(distanceX+distanceY);
}

console.log(f(2, 4, 5, 0));;
console.log(f(2.34, 15.66, -13.55, -2.9985));