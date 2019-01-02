function f(arr) {
    let map = new Map();
    for (let row of arr) {
        let [town, product, quantity] = row.split(' -> ');
        quantity = quantity.split(' : ').reduce((a, b) => a * b);
        if (!map.has(town)) {
            map.set(town, new Map())
        }
        map.get(town).set(product, quantity);
    }
    for (let [k, v] of map) {
        console.log(`Town - ${k}`);
        v.forEach((value, key) => console.log(`$$$${key} : ${value}`))
    }
}


f(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);

