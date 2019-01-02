function f(arr) {

    let result = {};

    for (let row of arr) {

        let [command, nameOfBrand, coffeeName, expireDate, quantityOfCoffe] = row.split(', ').filter(e => e !== '');

        switch (command) {
            case 'IN': {
                if (!result.hasOwnProperty(nameOfBrand)) {
                    result[nameOfBrand] = {};
                    result[nameOfBrand][coffeeName] = {};
                    result[nameOfBrand][coffeeName]['expirie'] = expireDate;
                    result[nameOfBrand][coffeeName]['quantity'] = Number(quantityOfCoffe);
                } else if (!result[nameOfBrand].hasOwnProperty(coffeeName)) {
                    result[nameOfBrand][coffeeName] = {};
                    result[nameOfBrand][coffeeName]['expirie'] = expireDate;
                    result[nameOfBrand][coffeeName]['quantity'] = Number(quantityOfCoffe);
                } else if (result[nameOfBrand].hasOwnProperty(coffeeName)) {
                    let exp1 = result[nameOfBrand][coffeeName]['expirie'];
                    let exp2 = expireDate;
                    let diff = exp1.localeCompare(exp2);


                    if (diff === -1) {
                        result[nameOfBrand][coffeeName]['expirie'] = exp2;
                        result[nameOfBrand][coffeeName]['quantity'] = Number(quantityOfCoffe);
                    } else if (diff === 0) {
                        result[nameOfBrand][coffeeName]['quantity'] += Number(quantityOfCoffe);
                    }

                }


                break
            }
            case 'OUT': {
                if (result.hasOwnProperty(nameOfBrand) && result[nameOfBrand].hasOwnProperty(coffeeName)) {
                    let exp1 = result[nameOfBrand][coffeeName]['expirie'];
                    let exp2 = expireDate;
                    let diff = exp1.localeCompare(exp2);
                    // console.log(exp1 + ' - ' + exp2 + ' => ' + diff);
                    if (result[nameOfBrand][coffeeName]['quantity'] >= quantityOfCoffe && diff === 1) {
                        result[nameOfBrand][coffeeName]['quantity'] -= quantityOfCoffe;
                    }

                }
                break
            }
            case 'REPORT': {
                console.log('>>>>> REPORT! <<<<<');
                let brand = Object.keys(result);
                for (let br of brand) {
                    console.log(`Brand: ${br}:`);
                    let coffe = Object.keys(result[br]);
                    for (let cof of coffe) {
                        let exp = result[br][cof]['expirie'];
                        let quant = result[br][cof]['quantity'];
                        console.log(`-> ${cof} -> ${exp} -> ${quant}.`);
                    }
                }
                break
            }
            case 'INSPECTION': {
                console.log('>>>>> INSPECTION! <<<<<');
                let brand = Object.keys(result).sort((a, b) => {
                    return a.localeCompare(b);
                });
                for (let br of brand) {
                    console.log(`Brand: ${br}:`);

                    let coffe = Object.keys(result[br]);
                    let sorted = new Map();

                    for (let cof of coffe) {
                        let exp = result[br][cof]['expirie'];
                        let quant = result[br][cof]['quantity'];
                        sorted.set(`-> ${cof} -> ${exp} ->`, quant);
                    }
                    let sortedMap = new Map([...sorted.entries()].sort((a, b) => b[1] - a[1]));
                    sortedMap.forEach((v, k) => console.log(k, v + '.'))
                }
                break
            }
        }
    }

}

//
// f([
//     "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
//     "IN, Folgers, Black Silk, 2023-03-01, 14",
//     "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
//     "IN, Aavazza, Crema e Gusto, 2023-05-01, 5",
//     "IN, bavazza, Crema e Gusto, 2023-05-01, 5",
//     "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
//     "IN, Folgers, Black Silk, 2022-01-01, 10",
//     "IN, Lavazza, Intenso, 2022-07-19, 20",
//     "OUT, Dallmayr, Espresso, 2022-07-19, 5",
//     "OUT, Dallmayr, Crema, 2022-07-19, 5",
//     "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
//     "REPORT",
//     "INSPECTION",
// ]);


f([
    'IN, Batdorf & Bronson, Espresso, 2005-01-25, 15'
    ,'IN, Batdorf & Bronson, NotEspresso, 2025-06-15, 10'
    ,'IN, Batdorf & Bronson, NotEspresso, 2025-06-16, 25'
    ,'REPORT']);