function f([v1, v2, t]) {
    t= t/60/60; // км./ч
    ob1 = v1*t;
    ob2 = v2*t;
    let distance = Math.abs(ob1 - ob2)*1000
    console.log(distance)
}

f([0, 60, 3600])
f([11, 10, 120])
f([5, -5, 40])
