function f(object, matrix) {
    let result = {};
    for (let obj of object) {

        if (!result.hasOwnProperty(obj.kingdom)) {
            result[obj.kingdom] = {};
            result[obj.kingdom]['all_kingdom_wins'] = 0;
            result[obj.kingdom]['all_kingdom_losses'] = 0;
            result[obj.kingdom][obj.general] = {};
            result[obj.kingdom][obj.general]['army'] = Number(obj.army);
            result[obj.kingdom][obj.general]['wins'] = 0;
            result[obj.kingdom][obj.general]['losses'] = 0;
        } else if (!result[obj.kingdom][obj.general]) {
            result[obj.kingdom][obj.general] = {};
            result[obj.kingdom][obj.general]['army'] = Number(obj.army);
            result[obj.kingdom][obj.general]['wins'] = 0;
            result[obj.kingdom][obj.general]['losses'] = 0;
        } else {
            result[obj.kingdom][obj.general]['army'] += Number(obj.army);
        }

    }


    for (let el of matrix) {
        let [AttackingKingdom, AttackingGeneral, DefendingKingdom, DefendingGeneral] = [...el];
        if (result[AttackingKingdom] !== result[DefendingKingdom]) {
            let attackingArmy = result[AttackingKingdom][AttackingGeneral]['army'];
            let defendingArmy = result[DefendingKingdom][DefendingGeneral]['army'];
            if (attackingArmy !== defendingArmy ) {
                if (attackingArmy > defendingArmy) {
                    result[AttackingKingdom]['all_kingdom_wins'] += 1;
                    result[AttackingKingdom][AttackingGeneral]['wins'] += 1;
                    result[AttackingKingdom][AttackingGeneral]['army'] = Math.floor(attackingArmy * 1.1);
                    result[DefendingKingdom]['all_kingdom_losses'] += 1;
                    result[DefendingKingdom][DefendingGeneral]['losses'] += 1;
                    result[DefendingKingdom][DefendingGeneral]['army'] = Math.floor(defendingArmy * 0.9);
                } else if (attackingArmy < defendingArmy) {
                    result[DefendingKingdom]['all_kingdom_wins'] += 1;
                    result[DefendingKingdom][DefendingGeneral]['wins'] += 1;
                    result[DefendingKingdom][DefendingGeneral]['army'] = Math.floor(defendingArmy * 1.1);
                    result[AttackingKingdom]['all_kingdom_losses'] += 1;
                    result[AttackingKingdom][AttackingGeneral]['losses'] += 1;
                    result[AttackingKingdom][AttackingGeneral]['army'] = Math.floor(attackingArmy * 0.9);
                }
            }
        }
    }

    let sortedKingdoms = Object.keys(result).sort((a, b) => {
        let diffOfWins = result[b]['all_kingdom_wins'] - result[a]['all_kingdom_wins'];
        if (diffOfWins === 0) {
            let diffOfLoses = result[a]['all_kingdom_losses'] - result[b]['all_kingdom_losses'];
            if (diffOfLoses === 0){
                return a.localeCompare(b);
            } else {
                return diffOfLoses;
            }
        } else {
            return diffOfWins;
        }
    });

    let winnerKingdom = sortedKingdoms[0];
    let sortedGenerals = Object.keys(result[winnerKingdom]).filter( e => e !== 'all_kingdom_wins' && e !== 'all_kingdom_losses').sort((a, b) => {
        return result[winnerKingdom][b]['army'] - result[winnerKingdom][a]['army'];
    });
    console.log(`Winner: ${winnerKingdom}`);
    for (let general of sortedGenerals) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${result[winnerKingdom][general]['army']}`);
        console.log(`---wins: ${result[winnerKingdom][general]['wins']}`);
        console.log(`---losses: ${result[winnerKingdom][general]['losses']}`);
    }
}





f([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 10},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);


console.log();


f([{kingdom: "Stonegate", general: "Ulric", army: 5000},
        {kingdom: "YorkenShire", general: "Quinn", army: 5000},
        {kingdom: "Maiden Way", general: "Berinon", army: 1000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]
);