function f(arr) {
    let result = new Map();

    for (let e of arr) {
        let [brand, model, produced] = e.split(' | ').filter(i => i !== '');

        if (!result.has(brand)) {
            result.set(brand, new Map())
        }
        if (!result.get(brand).has(model)) {
            result.get(brand).set(model, Number(produced))
        } else {
            let lastQ = Number(result.get(brand).get(model));
            result.get(brand).set(model, lastQ + +produced)
        }
    }
    for (const [k, v] of result) {
        console.log(k);
        for (const [model, produced] of v) {
            console.log(`###${model} -> ${produced}`)
        }
    }
}

f(['Audi | Q7 | 1000'
    , 'Audi | Q6 | 100'
    , 'BMW | X5 | 1000'
    , 'BMW | X6 | 100'
    , 'Citroen | C4 | 123'
    , 'Volga | GAZ-24 | 1000000'
    , 'Lada | Niva | 1000000'
    , 'Lada | Jigula | 1000000'
    , 'Citroen | C4 | 22'
    , 'Citroen | C5 | 10']);