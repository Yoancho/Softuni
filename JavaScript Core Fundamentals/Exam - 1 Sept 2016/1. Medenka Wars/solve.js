function f(arr) {

    let whiteDamage = 0;
    let darkDamage = 0;

    let whiteAttackCount = 0;
    let darkAttackCount = 0;

    for (let line of arr) {
        let [n, attacker] = line.split(' ').filter(e => e !== '');
        n = Number(n);

        switch (attacker) {
            case 'dark' : {

                if (darkAttackCount === 4) {
                    darkDamage += ((n * 60) * 4.50);
                } else {
                    darkDamage += (n * 60);
                    darkAttackCount++;
                }
                break
            }
            case 'white' : {

                if (whiteAttackCount >= 1) {
                    whiteDamage += ((n * 60) * 2.75);
                    whiteAttackCount = 0;
                } else {
                    whiteDamage += (n * 60);
                    whiteAttackCount++;
                }

                break
            }
        }

    }
    if (whiteDamage > darkDamage) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${whiteDamage}`);
    } else {
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${darkDamage}`);
    }

}




// f([
//     '5 white medenkas'
//     , '5 dark medenkas'
//     , '4 white medenkas']);
//
// console.log();

f([
    '5 white medenkas'
    , '1 dark medenkas', '1 dark medenkas', '1 dark medenkas', '1 dark medenkas', '1 dark medenkas'
    , '4 white medenkas']);

console.log();

f([
    '2 dark medenkas'
    , '1 white medenkas'
    , '2 dark medenkas'
    , '2 dark medenkas'
    , '15 white medenkas'
    , '2 dark medenkas'
    , '2 dark medenkas']);