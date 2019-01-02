function f(arr) {
    let temp = arr.join("").split('|').filter(x => x != '');
    let towns = temp.filter((x, i) => i % 2 == 0).map(x => x.trim());
    let sum = temp.filter((x, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b);

    console.log(towns.join(', '));
    console.log(sum);
}

f(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);