function f(arr) {
    let map = new Map();
    let result = new Map();
    for (const el of arr) {
        let [juice, quantity] = el.split(/\W+/).filter(e => e != '');
        if (!map.has(juice)){
            map.set(juice, 0)
        }
        map.set(juice, map.get(juice) + Number(quantity));
        if (map.get(juice) >= 1000){
            let juiceLeft = map.get(juice) % 1000;
            let bottle = (map.get(juice) - juiceLeft) / 1000;
            if (!result.has(juice)){
                result.set(juice,0)
            }
            result.set(juice, result.get(juice) +  bottle);
            map.set(juice, juiceLeft);
        }
    }

    for (let [k,v] of result) {
            console.log(k + ' => ' + v);
    }
}

f([`{Orange} => {2000}`
,`Peach => 1432`
,`Banana => 450`
,`Peach => 600`
,`Strawberry => 549`]);

f([`Kiwi => 234`
,`Pear => 2345`
,`Watermelon => 3456`
,`Kiwi => 4567`
,`Pear => 5678`
,`Watermelon => 6789`]);