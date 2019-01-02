function f(matrix) {
    let totalCashInATM = [];
    let total = 0;

    for (let row of matrix) {
        let length = row.length;
        if (length > 2) {
            row.forEach(e => totalCashInATM.push(e));
            totalCashInATM = totalCashInATM.sort((a, b) => b - a);
            let insertedCash = row.reduce((a, b) => a + b);
            total = totalCashInATM.reduce((a, b) => a + b);
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${total}$.`)
        } else if (length === 2) {
            let accountBalance = row[0];
            let moneyToWithdraw = row[1];
            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`)
            } else if (accountBalance >= moneyToWithdraw && moneyToWithdraw > total) {
                console.log('ATM machine is out of order!');
            } else if (accountBalance >= moneyToWithdraw && moneyToWithdraw <= total) {

                let banknoteSum = 0;
                for (let i = 0; i < totalCashInATM.length; i++) {
                    let currentBanknote = totalCashInATM[i];

                    if (currentBanknote + banknoteSum <= moneyToWithdraw) {
                        banknoteSum += totalCashInATM[i];
                        totalCashInATM[i] = 0;
                    }
                    if (banknoteSum === moneyToWithdraw) {
                        accountBalance = accountBalance - moneyToWithdraw;
                        console.log(`You get ${moneyToWithdraw}$. Account balance: ${accountBalance}$. Thank you!`);
                        break
                    }


                }


                totalCashInATM = totalCashInATM.sort((a, b) => b - a);
                total = totalCashInATM.reduce((a, b) => a + b);


            }
        }
        else if (length === 1) {
            let banknoteCounter = 0;
            let b = row[0];
            totalCashInATM.forEach(e => {
                if (e === b) {
                    banknoteCounter++
                }

            });
            console.log(`Service Report: Banknotes from ${row}$: ${banknoteCounter}.`)
        }
    }

}


// f([[20, 5, 100, 20, 1],
//     [457, 25],
//     [1],
//     [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
//     [20, 85],
//     [5000, 4500],
// ]);
//
// console.log();
//
// f([[50, 50, 100, 10, 500],
//     [500, 200]]);
//
// console.log();
//
// f([[500, 100]]);
// console.log();


// f([[10, 20, 10, 50, 5, 10],
//     [100, 30],
//     [20],
//     [20, 10, 10],
//     [5, 10],
//     [150, 150]]);

f([[50],
    [100, 500, 100, 50],
    [200, 150],
    [10, 10, 10, 10],
    [10],
    [50, 40],
    [10],
    [100, 500]]);