function f(n) {
    let a =  Math.floor(n/12)
    console.log(`${a.toFixed(0)}'-${n%12}"`)
}

f(36)
f(55)
f(11)