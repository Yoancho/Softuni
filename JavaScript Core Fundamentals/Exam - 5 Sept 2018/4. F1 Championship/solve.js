function f(arr) {
    let result = {};
    for (let row of arr) {

        let [team, pilot, point] = row.split(' -> ').filter(e => e !== '');

        if (!result.hasOwnProperty(team)) {
            result[team] = {};
            result[team][pilot] = +point;
            result[team]['team_score'] = +point
        } else {
            if (!result[team].hasOwnProperty(pilot)) {
                result[team][pilot] = +point;
                result[team]['team_score'] += Number(point)
            } else {
                result[team][pilot] += +point
                result[team]['team_score'] += Number(point)
            }
        }
    }
    let sortedTeams = Object.keys(result).sort((t1, t2) => {
        let diff = result[t2]['team_score'] - result[t1]['team_score']
        return diff;
    });

    for (let i = 0; i < 3; i++) {
        console.log(`${sortedTeams[i]}: ${result[sortedTeams[i]]['team_score']}`);
        let sortedTeamPlayers = Object.keys(result[sortedTeams[i]]).filter(e => e !== 'team_score').sort((sc1, sc2) => {
            let diff = result[sortedTeams[i]][sc2] - result[sortedTeams[i]][sc1];
            return diff;
        });

        for (let player of sortedTeamPlayers) {
            let points = result[sortedTeams[i]][player]
            console.log(`-- ${player} -> ${points}`);
        }
    }
}
    f(["Ferrari -> Kimi Raikonnen -> 18",
        "Ferrari -> Sebastian Vettel -> 16",
        "Mercedes -> Lewis Hamilton -> 10",
        "Mercedes -> Valteri Bottas -> 8",
        "Mercedes -> Valteri Bottas -> 8",
        "Red Bull -> Max Verstapen -> 200",
        "Red Bull -> Daniel Ricciardo -> 4"]);
