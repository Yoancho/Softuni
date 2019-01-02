function f(arr) {
    let pilotsInRace = arr.shift().split(' ').filter(e => e !== '');
    for (let element of arr) {
        let [action, pilot] = element.split(' ').filter(e => e !== '');

        switch (action) {
            case 'Join' : {
                if (!pilotsInRace.includes(pilot)) {
                    pilotsInRace.push(pilot)
                }
                break
            }
            case 'Crash' : {
                if (pilotsInRace.includes(pilot)) {
                    let index = pilotsInRace.indexOf(pilot);
                    pilotsInRace.splice(index, 1)
                }
                break
            }
            case 'Pit' : {
                if (pilotsInRace.includes(pilot)) {
                    let index = pilotsInRace.indexOf(pilot);
                    if (index !== pilotsInRace.length-1){
                        pilotsInRace.splice(index, 1);
                        pilotsInRace.splice(index + 1, 0, pilot)
                    }

                }
                break
            }
            case 'Overtake' : {
                if (pilotsInRace.includes(pilot)) {
                    let index = pilotsInRace.indexOf(pilot);
                    if (index !== 0){
                        let p = pilotsInRace.splice(index, 1).toString();
                        pilotsInRace.splice(index-1, 0, p)
                    }

                }
                break
            }
        }

    }


    console.log(pilotsInRace. join(' ~ '));

}

f(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Slavi",
    "Overtake Vetel",
    "Crash Slavi"]);


f(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]);