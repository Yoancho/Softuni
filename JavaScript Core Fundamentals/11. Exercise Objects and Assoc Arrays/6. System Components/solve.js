function f(arr) {
    let result = new Map();

    for (let e of arr) {
        let [system, component, subcomponent] = e.split(' | ').filter(i => i !== '');

        if (!result.has(system)) {
            result.set(system, new Map())
        }
        if (!result.get(system).has(component)) {
            result.get(system).set(component, []);
            result.get(system).get(component).push(subcomponent)
        } else {
            result.get(system).get(component).push(subcomponent)
        }
    }

    let sortedSystem = new Map([...result.entries()].sort((a, b) => {
        let a1 = Array.from(a[1]).length;
        let b1 = Array.from(b[1]).length;

        if (a1 > b1) {
            return -1;
        } else if (a1 < b1) {
            return 1;
        } else if (a1 === b1) {
            if (a[0] < b[0]) {
                return -1;
            } else if (a[0] > b[0]) {
                return 1
            } else if (a[0] === b[0]) {
                return 0;
            }
        }
    }));

    for (const [k, v] of sortedSystem) {

        console.log(k);

        let sortedComponents = new Map([...v.entries()].sort((a, b) => {
            let a1 = Array.from(a[1]).length;
            let b1 = Array.from(b[1]).length;

            if (a1 > b1) {
                return -1;
            } else if (a1 < b1) {
                return 1;
            } else if (a1 === b1) {
                return 0;
            }
        }));


        for (const [component, subcomponent] of sortedComponents) {
            console.log(`|||${component}`);
            for (let element of subcomponent) {
                console.log(`||||||${element}`)
            }
        }
    }
}

f(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);