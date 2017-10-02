function solve([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let discriminant = Math.pow(b ,2) - (4* a * c);

    if (discriminant > 0) {
        let x1 = (((b * -1) + Math.sqrt(discriminant)) / ((2 * a)))
        let x2 = (((b * -1) - Math.sqrt(discriminant)) / ((2 * a)))
        console.log(x2)
        console.log(x1)
    } else if (discriminant == 0) {
        let x = ((b * -1) / (2 * a))
        console.log(x)
    }else {
        console.log("No")
    }
}
