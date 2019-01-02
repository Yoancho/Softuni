function f(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c)
    if (d === 0) {
        let x = (b * -1) / (2 * a);
        console.log(x)
        return
    } else if (d > 0) {
        let x1 = ((b * -1 + (Math.sqrt(d))) / (2 * a))
        let x2 = ((b * -1 - (Math.sqrt(d))) / (2 * a))

        console.log(Math.min(x1, x2))
        console.log(Math.max(x1, x2))
        return
    } else if (d < 0) {
        console.log('No')
    }


}

f(6, 11, -35)
f(1, -12, 36)
f(5, 2, 1)