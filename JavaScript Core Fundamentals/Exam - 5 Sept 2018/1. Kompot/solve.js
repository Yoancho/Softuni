function f(arr) {

    let peach = 0;
    let plum = 0;
    let cherry = 0;
    let rakiya = 0;

    for (let el of arr) {
        let [fruit, weight] = el.split(' ').filter(e => e!== '');
        switch (fruit) {
            case 'peach': {
                peach += +weight;
                break;
            }
            case 'plum' : {
                plum += +weight;
                break;
            }
            case 'cherry' : {
                cherry += +weight;
                break;
            }
            default : {
                rakiya += +weight;
                break;
            }
        }
    }
    let chKomp = (cherry * 1000) / (25 * 9);
    let peKomp = (peach * 1000) / (140 * 2.5);
    let plKomp = (plum * 1000) / (20 * 10);
    let rakiyaLit = rakiya * 0.2;


    console.log(`Cherry kompots: ${Math.floor(chKomp)}`);
    console.log(`Peach kompots: ${Math.floor(peKomp)}`);
    console.log(`Plum kompots: ${Math.floor(plKomp)}`);
    console.log(`Rakiya liters: ${(rakiyaLit).toFixed(2)}`);

}


f(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']);

console.log()

f([   'apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        ,'watermelon 20.54']);