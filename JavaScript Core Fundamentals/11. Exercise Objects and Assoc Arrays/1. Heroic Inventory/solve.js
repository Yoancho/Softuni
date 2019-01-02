function f(arr) {
    let result = [];
    for (var el of arr) {
        let [name, level, ...items] = el.split(/\W+/g);

        let hero = {
            name: name,
            level: +level,
            items: items
        }
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}


f([`Isacc / 25 / Apple, GravityGun`,
    `Derek / 12 / BarrelVest, DestructionSword`,
    `Hes / 1 / Desolator, Sentinel, Antara`]);