function f(arr) {
    let total = 0;
    for (let row of arr) {
        let [coin, typeOfDrink, ...other] = row.split(', ').filter(e => e !== '');
        let price = 0;
        switch (typeOfDrink) {
            case 'coffee' : {
                let type = other.splice(0, 1).toString();
                if (type === 'caffeine') {
                    price = 0.80;
                } else if (type === 'decaf') {
                    price = 0.90;
                }

                let milk = false;
                if (other.includes('milk')) {
                    milk = true;
                    let index = other.indexOf('milk');
                    other.splice(index, 1);
                    price = Number(Math.fround(price * 1.1).toFixed(1));
                }
                let sugar = Number(other[0]);
                if (sugar > 0) {
                    price = +price + 0.10;
                }
                check(coin, price, typeOfDrink);
                break
            }
            case 'tea' : {

                price = 0.80;

                let milk = false;
                if (other.includes('milk')) {
                    milk = true;
                    let index = other.indexOf('milk');
                    other.splice(index, 1);
                    price = Number(Math.fround(price * 1.1).toFixed(1));
                }
                let sugar = Number(other[0]);
                if (sugar > 0) {
                    price = +price + 0.10;
                }
                check(coin, price, typeOfDrink);
                break
            }
        }

    }

    function check(money, price, product) {
        if (money < price) {
            let need = (price - money).toFixed(2)
            console.log(`Not enough money for ${product}. Need ${need}$ more.`);
        } else {
            let ch = (money - price).toFixed(2)
            console.log(`You ordered ${product}. Price: ${price.toFixed(2)}$ Change: ${ch}$`)
            total += price;
        }
    }

    console.log(`Income Report: ${total.toFixed(2)}$`);

}

f(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);
console.log();
f(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']);