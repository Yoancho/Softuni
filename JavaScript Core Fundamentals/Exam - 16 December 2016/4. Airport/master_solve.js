function f(input) {
    let planes = new Set();
    let port = new Map();

    for (let plane of input) {
        let tokens = plane.split(" ");
        let name = tokens[0];
        let town = tokens[1];
        let ppl = Number(tokens[2]);
        let action = tokens[3];

        if (action == 'depart') {
            if (!planes.has(name)) continue;
            else {
                planes.delete(name);
            }
        }
        if (action == 'land') {
            if (planes.has(name)) continue;
            else {
                planes.add(name);
            }
        }

        if (!port.has(town)) {
            port.set(town, {planes: [], arrivals: 0, departures: 0});
        }
        if (!port.get(town).planes.includes(name)) {
            port.get(town).planes.push(name);
        }
        if (action == "land") {
            port.get(town).arrivals += ppl;
        } else {
            port.get(town).departures += ppl;
        }
    }
    console.log("Planes left:");
    [...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
    [...port].sort((t1, t2) => {
        if (t1[1].arrivals < t2[1].arrivals) return 1;
        if (t1[1].arrivals > t2[1].arrivals) return -1;
        return t1[0].localeCompare(t2[0]);
    }).forEach(logData);

    function logData(town) {
        //console.log(`${town[0]} ${town[1].arrivals} ${town[1].departures}`);
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log("Planes:");
        town[1].planes.sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
    }
}



f([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart", "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);

console.log('---------------------------');


f([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
]);

console.log('---------------------------');

f([
    'Airbus1 London1 100 land'
    , 'Airbus2 Paris 200 land'
    , 'Airbus3 Madrid 300 land'
    , 'Airbus4 Lisbon 400 land'
    , 'Airbus5 Moscow 500 land'
    , 'Airbus6 Sofia 600 land'
    , 'Airbus7 Belgrad 700 land'
    , 'Airbus8 Athenes 800 land'
    , 'Airbus9 Rabat 900 land'
    , 'Airbus10 Aljir 1000 land'
]);