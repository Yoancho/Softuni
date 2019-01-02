function f(arr) {
    let result = {};
    for (let el of arr) {
        let [planeID, town, passengersCount, action] = el.split(' ').filter(e => e !== '');

        switch (action) {
            case 'land': {
                if (!result.hasOwnProperty(planeID)) {
                    result[planeID] = {};
                    result[planeID][town] = {arrivals: Number(passengersCount), departures: 0};
                    result[planeID]['status'] = action;
                } else {
                    if (!result[planeID].hasOwnProperty(town) && result[planeID]['status'] !== 'land') {
                        result[planeID][town] = {arrivals: Number(passengersCount), departures: 0};
                        result[planeID]['status'] = action;
                    } else {
                        if (result[planeID].hasOwnProperty(town) && result[planeID]['status'] !== 'land') {
                            result[planeID][town]['arrivals'] += Number(passengersCount);
                            result[planeID]['status'] = action;
                        }
                    }
                }
                break
            }
            case 'depart': {
                if (result.hasOwnProperty(planeID)) {
                    if (result[planeID]['status'] === 'land') {
                        if (!result[planeID].hasOwnProperty(town)) {
                            result[planeID][town] = {arrivals: 0, departures: Number(passengersCount)};
                            result[planeID]['status'] = action;
                        } else if (result[planeID].hasOwnProperty(town)) {
                            result[planeID][town]['departures'] += Number(passengersCount);
                            result[planeID]['status'] = action;

                        }
                    }
                }
                break
            }
            default :
                break
        }
    }
    let sortedPlanes = [];
    let allPlanes = Object.keys(result);
    allPlanes.forEach(e => {
        if (result[e]['status'] !== 'depart') {
            sortedPlanes.push(e)
        }
    });
    sortedPlanes = sortedPlanes.sort((a, b) => {
        return a.localeCompare(b);
    });
    console.log('Planes left:');
    sortedPlanes.forEach(e => console.log(` - ${e}`));

    let towns = {};
    for (let plane of allPlanes) {
        let k = Object.keys(result[plane]).filter(e => e !== 'status');
        for (let key of k) {
            var v = Object.values(result[plane][key]).filter(e => e !== 'land');

            let a = v[0];
            let d = v[1];

            if (!towns.hasOwnProperty(key)) {
                towns[key] = [a, d];
            } else {
                towns[key][0] += a;
                towns[key][1] += d;
            }
        }

    }
    let sorteTtowns = Object.keys(towns).sort((t1, t2) => {
        let diff = towns[t2][0] - towns[t1][0];
        if (diff === 0) {
            return t1.localeCompare(t2);
        } else return diff;
    });
    for (let t of sorteTtowns) {
        let planeToCurrentTown = [];
        for (let pl of allPlanes) {
            if (result[pl].hasOwnProperty(t)) {
                planeToCurrentTown.push(pl);
            }
        }

        console.log(t);
        console.log(`Arrivals: ${towns[t][0]}`);
        console.log(`Departures: ${towns[t][1]}`);
        let sortedPlaneToCurrentTown = planeToCurrentTown.sort((a, b) => {
            return a.localeCompare(b);
        });
        console.log('Planes:');
        sortedPlaneToCurrentTown.forEach(e => console.log(`-- ${e}`));
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