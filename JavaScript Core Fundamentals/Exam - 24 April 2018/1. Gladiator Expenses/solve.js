function f(lostsFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;


    for (var i = 1; i <= lostsFights; i++) {
        if (i % 2 === 0) {
            helmet++
        }
        if (i % 3 === 0) {
            sword++;
            if (i % 3 === 0 && i % 2 === 0) {
                shield++;
                if (shield % 2 === 0) {
                    armor++;
                }
            }
        }
    }

    let sum = (helmet * helmetPrice) + (sword * swordPrice) + (shield * shieldPrice) + (armor * armorPrice);

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}


f(7, 2, 3, 4, 5);

console.log();

f(23, 12.50, 21.50, 40, 200);
