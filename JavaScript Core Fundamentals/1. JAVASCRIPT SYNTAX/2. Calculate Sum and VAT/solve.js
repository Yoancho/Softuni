function solve(arr) {
  let n = arr.map(Number);
  let sum = n.reduce(function (a, b) {
      return a+b;
  });
  let vat = (sum*1.2)-sum;
  let total = sum + vat;
console.log(`
    sum = ${sum}
    VAT = ${vat}
    total = ${total}
`);
}

(solve([1.20, 2.60, 3.50]));