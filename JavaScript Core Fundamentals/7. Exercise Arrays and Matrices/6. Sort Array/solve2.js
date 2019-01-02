function f(arr) {
    console.log(arr.sort(compare).join('\n'));

    function compare(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}


f([`alpha`, `beta`, `gamma`]);
console.log();
f([`Isacc`, `Theodor`, `Jack`, `Harrison`, `George`]);
console.log();
f([`test`, `Deny`, `omen`, `Default`]);