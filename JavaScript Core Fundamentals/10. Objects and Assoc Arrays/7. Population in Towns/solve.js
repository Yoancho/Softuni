function f(arr) {
    let result = new Map();
    for (let str of arr) {
        let [town, population] = str.split(/\s*<->\s*/g);
        if (!result.has(town)) {
            result.set(town, 0);
        }
        result.set(town, result.get(town) + Number(population));
    }

    result.forEach((v,k) => console.log(`${k} : ${v}`));

}


f(['Sofia <-> 1200000',
    'Sofia <-> 1200000',
    'Sofia <-> 1200000',
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);