function f(arr) {
    let map = new Map();
    for (let el of arr) {
        let [town, product, price] = el.split(' | ').filter(e => e !== '');
        if (!map.has(product)) {
            map.set(product, new Map())
        }
        map.get(product).set(town, Number(price));
    }

    for (let [key, value] of map) {
    let sortedArray = Array.from(value.keys()).sort((key1, key2)=>{
       return value.get(key1) - value.get(key2)
        let diff = value.get(key1) - value.get(key2)
        if(diff === 0){
           return key1.localeCompare(key2)
        }
        return diff
    });
        console.log(`${key} -> ${value.get(sortedArray[0])} (${sortedArray[0]})`);
    }
}

f(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);