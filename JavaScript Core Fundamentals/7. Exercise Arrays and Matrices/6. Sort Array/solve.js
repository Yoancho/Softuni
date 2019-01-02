function f(arr) {
    let result = arr.sort(function (a, b) {

        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else if (a.length === b.length) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    console.log(result.join('\n'));
}

f([`alpha`, `beta`, `gamma`]);
console.log();
f([`Isacc`, `Theodor`, `Jack`, `Harrison`, `George`]);
console.log();
f([`test`, `Deny`, `omen`, `Default`]);