function f(arr) {
    let firstLine = arr.shift().split('|').join('').split(' ').filter(e => e !== '');
    let result = [];
    for (let line of arr) {
        line = line.split(/\s*\|\s*/g).filter(e => e !== '');
        let obj = {};
        obj[firstLine[0]] = line[0];
        obj['Latitude'] = +line[1];
        obj['Longitude'] = Number(line[2]);

        result.push(obj);
    }
    console.log(JSON.stringify(result));
}


f(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);


f(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);