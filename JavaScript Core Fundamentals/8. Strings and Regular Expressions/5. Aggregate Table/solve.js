function f(arr) {
    let towns = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split('|').filter(a => a !== '');
        towns.push(row[0].trim());
        sum += parseInt(row[1]);
    }

    console.log(towns.join(', '));
    console.log(sum);
}

f(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);