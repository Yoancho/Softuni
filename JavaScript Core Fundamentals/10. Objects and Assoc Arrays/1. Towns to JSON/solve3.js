function f(arr) {
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let values = arr[i].split(/\s*\|\s*/g)
            .filter(a => a !== '');
        arr[i] = {Town : values[0], Latitude : +values[1], Longitude : +values[2]};
    }
    console.log(JSON.stringify(arr));
}


f(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);


f(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);