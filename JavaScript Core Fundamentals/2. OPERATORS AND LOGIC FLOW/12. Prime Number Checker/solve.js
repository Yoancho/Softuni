function f(i) {
    if (i === 1){
        console.log(false)
        return
    }
    if((i === 2) || (i === 3) || (i === 5) || (i === 7)){
       console.log(true)
        return
    }
    else if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)){
        console.log(true)
        return
    }
    console.log (false);
}

f(7)
f(8)
f(81)