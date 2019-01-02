function f(arr) {
    let result = {};
    for (let string of arr) {

        let [country, town, cost] = string.split(' > ');
        let t = Array.from(town);
        t[0] = t[0].toUpperCase();
        town = t.join('');
        if (!result.hasOwnProperty(country)) {
            result[country] = {};
            result[country][town] = Number(cost);
        } else {
            if (!result[country].hasOwnProperty(town)) {
                result[country][town] = Number(cost);
            } else {
                if (result[country][town] > cost) {
                    result[country][town] = cost;
                }
            }
        }
    }

    let sortedCountries = Object.keys(result).sort((a, b) => {
        if (a < b){
            return -1 ;
        } else if (a > b){
            return 1;
        } else return 0;
    });

    for (let country of sortedCountries) {
        let sortedTowns = Object.keys(result[country]).sort((t1, t2)=>{
            let costDiff = result[country][t1] - result[country][t2];
            return costDiff
        });

            let forPrint = sortedTowns.map(e => e + ' -> ' + result[country][e]);

            console.log(`${country} -> ${forPrint.join(' ')}`)
    }
}


f(["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);