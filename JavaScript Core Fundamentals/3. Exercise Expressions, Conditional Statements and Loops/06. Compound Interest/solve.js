function f([principalSum, interestRate, compoundingPeriod, totalTimespan  ]) {

    let i = interestRate/100; // в проценти
    let n = 12 / compoundingPeriod;

    let F = principalSum * Math.pow(1+ (i / n), n*totalTimespan);
        console.log(F.toFixed(2))

add.call
    //F = P(1+ i/n)**n*t
    //P is the principal sum
    //i is the nominal interest rate
    //n is the compounding frequency
    //t is the overall length of time the interest is applied
}




f([1500, 4.3, 3, 6])
f([100000, 5, 12, 25])