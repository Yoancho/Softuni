function f(input) {
    let airport = new Set();
    let townStatistics = new Map();
    let townPlanes = new Map();

    for (let item of input) {
        let planeInfo = item.split(' ');
        let planeId = planeInfo[0];
        let town = planeInfo[1];
        let passengers = Number(planeInfo[2]);
        let action = planeInfo[3];

        if (action === 'land') {
            if (airport.has(planeId)) {
                continue;
            } else {
                airport.add(planeId)
            }
            if (!townStatistics.has(town)) {
                townStatistics.set(town, [0, 0]);
            }
            if (!townPlanes.has(town)) {
                townPlanes.set(town, new Set())
            }
            townStatistics.get(town)[0] += passengers;
            townPlanes.get(town).add(planeId);
        } else {
            if (airport.has(planeId)) {
                airport.delete(planeId);
            } else {
                continue;
            }
            if (!townStatistics.has(town)) {
                townStatistics.set(town, [0, 0]);
            }
            if (!townPlanes.has(town)) {
                townPlanes.set(town, new Set())
            }

            townStatistics.get(town)[1] += passengers;
            townPlanes.get(town).add(planeId);
        }
    }
    let sortedAirport = [...airport.entries()].sort((a, b) => a[0].localeCompare(b[0])); // може и така: Array.from(airport.entries())
    console.log('Planes left:');

    for (let [planeId] of sortedAirport) {
        console.log(`- ${planeId}`)
    }
    let sortedTowns = [...townStatistics.entries()].sort(sortTowns);

    for (let [towns, statistics] of sortedTowns) {
        console.log(towns);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);
        let sortedPlanes = [...townPlanes.get(towns).values()]
            .sort((a, b) => a.localeCompare(b));
        console.log('Planes:');
        for (let planeID of sortedPlanes) {
            console.log(`-- ${planeID}`);
        }
    }

    function sortTowns(a, b) {
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        let firstCriteria = bArrivals - aArrivals;

        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a[0].localeCompare(b[0]);
        }
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