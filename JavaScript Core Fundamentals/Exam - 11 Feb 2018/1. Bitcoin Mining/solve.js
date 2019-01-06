function f(arr) {
    let bitcoins = 0;
    let money = 0;
    let dayOfTheFirstPurchasedBitcoin = 0;
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    arr.map(Number);
    for (let i = 1; i <= arr.length; i++) {
        let dailyGold = arr[i - 1];
        if (i % 3 === 0) {
            dailyGold = dailyGold * 0.7;
        }
        money += dailyGold * goldPrice;
        if (money >= bitcoinPrice) {
            if (dayOfTheFirstPurchasedBitcoin === 0) {
                dayOfTheFirstPurchasedBitcoin = i;
            }
            while (money >= bitcoinPrice) {
                bitcoins++;
                money -= bitcoinPrice;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayOfTheFirstPurchasedBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}




f([100, 200, 300]);

console.log();

f([50, 100]);

console.log();

f([3124.15, 504.212, 2511.124]);