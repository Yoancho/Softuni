function f(arr) {
    let product = arr.filter((e, i) => i % 2 === 0);
    let sum = arr.filter((e, i) => i % 2 === 1).reduce((a, b) => Number(a) + Number(b));
    console.log('You purchased ' + product.join(', ') + ' for a total sum of ' + sum);
}

f(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);