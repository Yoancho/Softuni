function printBill(input) {
    let priduct = input.filter((a, i) => i % 2 == 0).join(', ');
    let price = input.filter((a, i) => i % 2 == 1);
    let sum = price.map(Number).reduce((a, b) => a + b );
    console.log(`You purchased ${priduct} for a total sum of ${sum}`);
}
printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);