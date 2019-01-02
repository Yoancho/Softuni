function f(minAge, fistName, firstAge, secondName, secondAge) {
    let p1 = {
        name: fistName,
        age: firstAge
    }
    let p2 = {
        name: secondName,
        age: secondAge
    }
    if (p1.age >= minAge){
        console.log(p1)
    }
    if (p2.age >= minAge){
        console.log(p2)
    }
}

(f(12, 'Ivan', 15, 'Asen', 9));