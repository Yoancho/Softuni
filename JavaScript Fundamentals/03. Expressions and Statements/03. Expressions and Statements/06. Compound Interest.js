function compoundInterest([principalSum, interestRate, compoundingPeriod, totalTimeSpan]) {
    [principalSum, interestRate, compoundingPeriod, totalTimeSpan] = [principalSum, interestRate, compoundingPeriod, totalTimeSpan].map(Number);
    let i = interestRate / 100; //percent
    let n = 12 / compoundingPeriod;

    let F = principalSum * Math.pow(1 + (i / n), n * totalTimeSpan);
    return F.toFixed(2);
    //F = P(1+ i/n)**n*t
    //P is the principal sum
    //i is the nominal interest rate
    //n is the compounding frequency
    //t is the overall length of time the interest is applied

}


console.log(compoundInterest([1500, 4.3, 3, 6]));
console.log(compoundInterest([100000, 5, 12, 25]));