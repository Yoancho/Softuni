function f(lostsFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalSum = 0;
    for (var i = 1; i < lostsFights; i++) {
        if (i % 2 === 0) {
            totalSum += helmetPrice;
        }
        if (i % 3 === 0) {
            totalSum += swordPrice;
        }
        if (i % 6 === 0) {
            totalSum += shieldPrice
        }
    }
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

f(7, 2, 3, 4, 5);

console.log();

f(23, 12.50, 21.50, 40, 200);