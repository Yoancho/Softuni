function f(object, matrix) {
    let result = {};
    for (let obj of object) {
        let [kingdom, general, army] = [obj.kingdom, obj.general, obj.army];

        if (!result.hasOwnProperty(kingdom)) {
            result[kingdom] = {};
            result[kingdom][general] = {};
            result[kingdom][general]['army'] = +army;
            result[kingdom][general]['wins'] = 0;
            result[kingdom][general]['losses'] = 0;
            result[kingdom]['total_wins'] = 0;
        } else {
            if (!result[kingdom].hasOwnProperty(general)) {
                result[kingdom][general] = {};
                result[kingdom][general]['army'] = Number(army);
                result[kingdom][general]['wins'] = 0;
                result[kingdom][general]['losses'] = 0;
            } else {
                result[kingdom][general]['army'] += +army;
            }
        }
    }

    for (let row of matrix) {
        let [AttackingKingdom, AttackingGeneral, DefendingKingdom, DefendingGeneral] = row;

        let g1 = result[AttackingKingdom][AttackingGeneral]['army'];
        let g2 = result[DefendingKingdom][DefendingGeneral]['army'];
        if (g1 !== g2 && result[AttackingKingdom] !== result[DefendingKingdom]) {


            if (g1 > g2) {
                let winner = Math.floor(g1 * 1.1);
                let loser = Math.floor(g2 * 0.9);
                result[AttackingKingdom][AttackingGeneral]['army'] = +winner;
                result[AttackingKingdom][AttackingGeneral]['wins'] += 1;
                result[AttackingKingdom]['total_wins'] += 1;

                result[DefendingKingdom][DefendingGeneral]['army'] = +loser;
                result[DefendingKingdom][DefendingGeneral]['losses'] += 1;
            } else if (g1 < g2) {
                let winner = Math.floor(g2 * 1.1);
                let loser = Math.floor(g1 * 0.9);
                result[AttackingKingdom][AttackingGeneral]['army'] = +loser;
                result[AttackingKingdom][AttackingGeneral]['losses'] += 1;

                result[DefendingKingdom][DefendingGeneral]['army'] = +winner;
                result[DefendingKingdom][DefendingGeneral]['wins'] += 1;
                result[DefendingKingdom]['total_wins'] += 1;
            }
        }

    }
    let sortedKingdoms = Object.keys(result).sort((k1, k2) => {
        let diff = result[k2]['total_wins'] - result[k1]['total_wins'];
        if (diff === 0) {
            return k1.localeCompare(k2);
        } else {
            return diff;
        }
    });
    let sortedGenerals = Object.keys(result[sortedKingdoms[0]]).filter(e => e !== 'total_wins').sort((g1, g2) => {
        let diff = result[sortedKingdoms[0]][g2]['army'] - result[sortedKingdoms[0]][g1]['army'];
        if (diff === 0) {
            let diff2 = result[sortedKingdoms[0]][g2]['wins'] - result[sortedKingdoms[0]][g1]['wins'];
            if (diff2 === 0) {
                result[sortedKingdoms[0]][g2]['losses'] - result[sortedKingdoms[0]][g1]['losses'];
            } else {
                return diff2;
            }
        } else {
            return diff;
        }
    });
    console.log(`Winner: ${sortedKingdoms[0]}`);
    for (let gen of sortedGenerals) {
        console.log(`/\\general: ${gen}`)
        console.log(`---army: ${result[sortedKingdoms[0]][gen]['army']}`)
        console.log(`---wins: ${result[sortedKingdoms[0]][gen]['wins']}`)
        console.log(`---losses: ${result[sortedKingdoms[0]][gen]['losses']}`)
    }
}




f([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
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