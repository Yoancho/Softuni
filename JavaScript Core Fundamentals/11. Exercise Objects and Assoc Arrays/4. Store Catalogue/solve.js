function f(arr) {
    let result = new Map();
    let ordered = arr.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1
        } else if (a === b) {
            return 0
        }
    });

    for (let row of ordered) {
        if (!result.has(row[0])) {
            result.set(row[0], [])
        }
        result.get(row[0]).push(row);
    }
    for (let [k, v] of result) {
        console.log(k);
        for (let element of v) {
            element = element.replace(/ (?=:)/, '')
            console.log(`  ${element.trimLeft()}`);
        }
    }
}

f([`Appricot : 20.4`
    , `Fridge : 1500`
    , `TV : 1499`
    , `Deodorant : 10`
    , `Boiler : 300`
    , `Apple : 1.25`
    , `Anti-Bug Spray : 15`
    , `T-Shirt : 10`]);


f([`Banana : 2`
    , `Rubic's Cube : 5`
    , `Raspberry P : 4999`
    , `Rolex : 100000`
    , `Rollon : 10`
    , `Rali Car : 2000000`
    , `Pesho : 0.000001`
    , `Barrel : 10`]);