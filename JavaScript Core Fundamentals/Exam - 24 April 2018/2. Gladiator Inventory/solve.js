function f(arr) {
    let inventory = new Set(arr[0].split(' '));
    arr.splice(0, 1);

    for (let item of arr) {
        if (item === 'Fight!') {
            break
        }

        let [command, equipment] = item.split(/\s+/g);
        if (command === 'Buy') {
            if (!inventory.has(equipment)) {
                inventory.add(equipment);
            }
        }

        if (command === 'Trash') {
            inventory.delete(equipment)
        }
        if (command === 'Repair') {
            if (inventory.has(equipment)) {
                inventory.delete(equipment);
                inventory.add(equipment);
            }

        }
        if (command === 'Upgrade') {
            let [e, u] = equipment.split('-');
            if (inventory.has(e)) {
                let tr = Array.from(inventory);
                let i = tr.indexOf(e);
                tr.splice(i + 1, 0, e + ':' + u);

                inventory = new Set(tr);
            }
        }
    }
    console.log(Array.from(inventory).join(' '));
}


f([`SWORD Shield Spear`
    , `Buy Bag`
    , `Trash Shield`
    , `Repair Spear`
    , `Upgrade SWORD-Steel`
    , `Fight!`]);

console.log();

f([`SWORD Shield Spear`
    , `Trash Bow`
    , `Repair Shield`
    , `Upgrade Helmet-V`
    , `Fight!`]);