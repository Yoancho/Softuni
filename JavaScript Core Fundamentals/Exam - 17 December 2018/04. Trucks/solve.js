function f(arr) {
    let trucks = {};
    let tires = [];

    for (let row of arr) {

        switch (row[0]) {
            case 'NEWTRUCK': {

                let [command, plateNumber, tires] = [...row];

                if (!trucks.hasOwnProperty(plateNumber)) {
                    trucks[plateNumber] = {};
                    trucks[plateNumber]['tires'] = tires;
                    trucks[plateNumber]['travelled_kilometers'] = 0;
                }
                break;
            }
            case 'NEWTIRES': {
                tires.push(row[1]);
                break;
            }
            case 'WORK': {
                let [command, plateNumber, distance] = [...row];
                let currentTires = trucks[plateNumber].tires;
                if (trucks.hasOwnProperty(plateNumber)) {
                    let currentTireLife = trucks[plateNumber].tires.reduce((a, b) => a + b) / 8;
                    let tireLifeNeeded = distance / 1000;
                    if (tireLifeNeeded > currentTireLife) {
                        for (let i = 0; i < tires.length; i++) {
                            if ((tires[i].reduce((a, b) => a + b) / 8) >= tireLifeNeeded) {
                                trucks[plateNumber]['travelled_kilometers'] += distance;
                                for (let j = 0; j < 8; j++) {
                                    trucks[plateNumber].tires[j] = tires[i][j] - tireLifeNeeded;
                                }
                                tires.splice(i, 1);
                                break
                            } else {
                                for (let j = 0; j < 8; j++) {
                                    trucks[plateNumber].tires[j] = tires[i][j];
                                }
                                tires.splice(0, 1);
                                break
                            }
                        }
                    } else {
                        trucks[plateNumber]['travelled_kilometers'] += distance;

                        for (let i = 0; i < currentTires.length; i++) {
                            trucks[plateNumber].tires[i] = currentTires[i] - tireLifeNeeded;
                        }

                    }
                }
                break;
            }
        }
    }
    let result = Object.keys(trucks);
    for (let el of result) {
        console.log(`Truck ${el} has traveled ${trucks[el].travelled_kilometers}.`);
    }
    console.log(`You have ${tires.length} sets of tires left.`);

}

f([["NEWTRUCK", "C1111AA", [7, 7, 7, 7, 7, 7, 7, 7]],
    ["NEWTRUCK", "C2222AA", [5, 5, 5, 5, 5, 5, 5, 5]],
    ["NEWTIRES", [8, 8, 8, 8, 8, 8, 8, 8]],
    ["NEWTIRES", [4, 4, 4, 4, 4, 4, 4, 4]],
    ["NEWTIRES", [5, 5, 5, 5, 5, 5, 5, 5]],
    ["WORK", "C1111AA", 7700],
    ["WORK", "C2222AA", 6000],
    ["WORK", "C1111AA", 3000],
]);

console.log();

f([
        ["NEWTRUCK", "B1002SA", [17, 17, 17, 17, 17, 17, 17, 17]],
        ["NEWTIRES", [8, 8, 4, 8, 8, 8, 9, 8]],
        ["NEWTIRES", [4, 4, 5, 4, 4, 7, 4, 4]],
        ["NEWTIRES", [5, 1, 5, 5, 5, 7, 5, 1]],
        ["WORK", "B1002SA", 7700],
        ["WORK", "B1002SA", 6000],
        ["WORK", "B1002SA", 3000]
    ]);
