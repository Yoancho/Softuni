function f(arr) {
    let inventory = arr.shift().split(' ');
    let allCommands = {
        'Buy': function (item) {
            if (!inventory.includes(item)) {
                inventory.push(item)
            }
        },
        'Trash': function (item) {
            let index = inventory.indexOf(item);
            if (index > -1) {
                inventory.splice(index, 1)
            }
        },
        'Repair': function (item) {
            let index = inventory.indexOf(item);
            if (index > -1) {
                let element = inventory.splice(index, 1);
                inventory.push(element[0]);

            }
        },
        'Upgrade': function (item) {
            let [realItm, upgrade] = item.split('-');
            let index = inventory.indexOf(realItm);
            if (index > -1 ) {
                inventory.splice(index + 1, 0, realItm + ':' + upgrade)
            }
        },
        'Fight!': function () {
            console.log(inventory.join(' '));
        }
    };

    for (let string of arr) {
        let [command, item] = string.split(' ');
        allCommands[command](item);
    }
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