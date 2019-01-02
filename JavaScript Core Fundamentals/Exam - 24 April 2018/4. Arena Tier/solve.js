function f(arr) {
    let result = {};
    for (let string of arr) {
        if (string.includes(' -> ')) {
            let [name, item, score] = string.split(' -> ');
            if (!result.hasOwnProperty(name)) {
                result[name] = {};
                result[name][item] = Number(score);
                result[name]['total_skill'] = Number(score);
            } else {
                if (!result[name].hasOwnProperty(item)) {
                    result[name][item] = Number(score);
                    result[name]['total_skill'] += Number(score);
                } else {
                    if (result[name][item] < score) {
                        result[name]['total_skill'] -= result[name][item];
                        result[name]['total_skill'] += Number(score)
                    }
                }
            }
        } else if (string.includes(' vs ')) {
            let [gladiator1, gladiator2] = string.split(' vs ');
            //only in cycle
            if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)) {
                for (let gladItem in result[gladiator1]) {
                    let g1Score = result[gladiator1][gladItem];
                    let g2Score = result[gladiator2][gladItem];

                    if (g1Score && g2Score) {
                        if (g1Score > g2Score) {
                            delete result[gladiator2];
                            break
                        } else if (g1Score < g2Score) {
                            delete result[gladiator1];
                            break
                        }
                    }
                }
            }
        } else {
            break;
        }
    }
    let sortedGladiators = Object.keys(result).sort((g1, g2) => {
        let diffInScore = result[g2]['total_skill'] - result[g1]['total_skill'];
        if (diffInScore === 0) {
            return g1.localeCompare(g2);
        } else {
            return diffInScore
        }
    });
    for (let gladiator of sortedGladiators) {
        console.log(`${gladiator}: ${result[gladiator]['total_skill']} skill`);
        let sortedTechnique = Object.keys(result[gladiator]).filter(e => e !== 'total_skill').sort((t1, t2) => {
            let diffInScore = result[gladiator][t2] - result[gladiator][t1];
            if (diffInScore === 0) {
                return t1.localeCompare(t2);
            }
            return diffInScore;
        });
        //console.log(sortedTechnique);
        for (let technique of sortedTechnique) {
            console.log(`- ${technique} <!> ${result[gladiator][technique]}`);
        }

    }

}

f([`Pesho -> BattleCry -> 400`
    , `Gosho -> PowerPunch -> 300`
    , `Stamat -> Duck -> 200`
    , `Stamat -> Tiger -> 250`
    , `Ave Cesar`]);

console.log();

f([`Pesho -> Duck -> 400`
    , `Julius -> Shield -> 150`
    , `Gladius -> Heal -> 200`
    , `Gladius -> Support -> 250`
    , `Gladius -> Shield -> 250`
    , `Pesho vs Gladius`
    , `Gladius vs Julius`
    , `Gladius vs Gosho`
    , `Ave Cesar`]);