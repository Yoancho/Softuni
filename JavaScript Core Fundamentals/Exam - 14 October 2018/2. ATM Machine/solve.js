function f(arr) {
    let totalCashInATM = [];

    for (let el of arr) {
        let length = el.length;

        if (length > 2) {
            let insertedCash = el.reduce((a, b) => a + b);
            totalCashInATM = totalCashInATM.concat(el);

            let currentBalance = totalCashInATM.reduce((a, b) => a + b);

            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${currentBalance}$.`);
        } else if (length === 2) {
            let [accountBalance, moneyToWithdraw] = el;
            if(totalCashInATM.length === 0){
                console.log('ATM machine is out of order!')
                break
            }
            let currentBalance = totalCashInATM.reduce((a, b) => a + b);

            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`)
            } else if (currentBalance < moneyToWithdraw) {
                console.log('ATM machine is out of order!')
            } else {
                totalCashInATM = totalCashInATM.sort((a, b) => b - a);
                let cash = 0;
                for (let banknotes of totalCashInATM) {
                    if (cash + banknotes <= moneyToWithdraw) {
                        let index = totalCashInATM.indexOf(banknotes);
                        let currentBanknote = totalCashInATM.splice(index, 1, 0);
                        cash += +currentBanknote;
                        if (cash === moneyToWithdraw) {
                            accountBalance = accountBalance - moneyToWithdraw;
                            console.log(`You get ${moneyToWithdraw}$. Account balance: ${accountBalance}$. Thank you!`);
                            break
                        }
                    }
                }
            }
        } else if (length === 1) {
            el = Number(el);
            let counter = 0;
            for (var i = 0; i < totalCashInATM.length; i++) {
                if (el == totalCashInATM[i]) {
                    counter++;
                }
            }
            console.log(`Service Report: Banknotes from ${el}$: ${counter}.`);
        }
    }
}


f([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);

console.log();

f([[50, 50, 100, 10, 500],
    [500, 200]]);

console.log();

f([[500, 100]]);