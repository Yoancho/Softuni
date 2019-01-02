function f(arr) {
    result = {};
    for (let row of arr) {
        let [color, option1, option2] = row.split('|').filter(e => e !== '');

        if (!result.hasOwnProperty(color)) {
            result[color] = {};
            result[color]['win'] = [];
            result[color]['loss'] = [];
        }
        switch (option1) {
            case 'win' : {
                result[color]['win'].push(option2);
                break
            }
            case 'loss' : {
                result[color]['loss'].push(option2);
                break
            }
            case 'name' : {
                result[color]['name'] = option2;
                break
            }
            case 'age' : {
                result[color]['age'] = option2;
                break
            }
        }
    }
    let objForPrint = {};
    let colors = Object.keys(result).sort();
    for (let el of colors) {
        if (result[el].hasOwnProperty('age') && result[el].hasOwnProperty('name')) {

            let rank = (result[el].win.length + 1) / (result[el].loss.length + 1);
            objForPrint[el] = {
                age: result[el]['age'],
                name: result[el]['name'],
                opponents: result[el]['loss'].concat(result[el]['win']).sort(),
                rank: rank.toFixed(2)
            };
        }
    }

    console.log(JSON.stringify(objForPrint));
}


f([
    'purple|age|99'
    , 'red|age|44'
    , 'blue|win|pesho'
    , 'blue|win|mariya'
    , 'purple|loss|Kiko'
    , 'purple|loss|Kiko'
    , 'purple|loss|Kiko'
    , 'purple|loss|Yana'
    , 'purple|loss|Yana'
    , 'purple|loss|Manov'
    , 'purple|loss|Manov'
    , 'red|name|gosho'
    , 'blue|win|Vladko'
    , 'purple|loss|Yana'
    , 'purple|name|VladoKaramfilov'
    , 'blue|age|21'
    , 'blue|loss|Pesho'])


f([
    'purple|age|99'
    , 'red|age|44'
    , 'blue|win|pesho'
    , 'blue|win|mariya'
    , 'purple|loss|Koko'
    , 'purple|loss|Kako'
    , 'purple|loss|Kiko'
    , 'purple|loss|Yana'
    , 'purple|loss|Yana'
    , 'purple|loss|Monov'
    , 'purple|loss|Manov'
    , 'red|name|gosho'
    , 'blue|win|Vladko'
    , 'purple|loss|Yana'
    , 'purple|name|VladoKaramfilov'
    , 'blue|age|21'
    , 'blue|loss|Pesho']);