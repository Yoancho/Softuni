function f(arr) {
let totalMoney = 0;
    for (let el of arr) {
        let [price, change] = [0, 0];
        let [coin, drink, ...other] = el.split(', ').filter(e => e !== '');
        coin = Number(coin);
let sugar = Number(other.pop());
        if (sugar > 0){
            price += 0.10;
        }
        if (other.includes('milk')){
            price += 0.10;
        }
        switch(drink){
            case 'coffee': {
                let caffeine = other.shift();
                if (caffeine === 'caffeine'){
                    price += 0.80;
                } else if (caffeine === 'decaf'){
                    price += 0.90;
                }
                break
            }

            case 'tea' : {
                price += 0.80;
                break
            }
        }

        if (coin >= price){
            totalMoney += price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(coin-price).toFixed(2)}$`)
        } else {
            console.log(`Not enough money for ${drink}. Need ${(price-coin).toFixed(2)}$ more.`)
        }

    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}

f(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);
console.log();
f(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']);