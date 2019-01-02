function f(arr) {
    let result = {};
    for (let obj of arr) {
        let [system, candidate, votes] = [obj.system, obj.candidate, obj.votes];

        if (result.hasOwnProperty(system)) {
            if (result[system].hasOwnProperty(candidate)) {
                result[system][candidate] += votes;
            } else {
                result[system][candidate] = votes;
            }
        } else {
            result[system] = {};
            result[system][candidate] = votes;
        }
    }


    let totalSum = 0;
    for (let key in result) {
        let sortedKeys = Object.keys(result[key]).sort((a, b) => result[key][b] - result[key][a]);
        let winner = sortedKeys[0];
        let sum = 0;

        for (let innerKey in result[key]) {
            sum += result[key][innerKey];
        }
        result[key] = {};
        result[key]['candidate'] = winner;
        result[key]['votes'] = sum;
        totalSum += sum;
        //console.log(winner);
    }
    // console.log(result);
    let players = {};

    for (let key in result) {
        if (players.hasOwnProperty(result[key]['candidate'])) {
            players[result[key]['candidate']] += result[key]['votes'];
        } else {
            players[result[key]['candidate']] = result[key]['votes'];
        }
    }

    let sortedPlaers = Object.keys(players).sort((a, b) => players[b] - players[a]);
    let sortedValues = Object.values(players).sort((a, b) => b - a);
    let sortedPercents = sortedValues.map(e => Math.floor(e / totalSum * 100));
    let sortedSystems = Object.keys(result).sort((a, b) => result[b].votes - result[a].votes);


    if (sortedPercents[0] > 50) {
        if (sortedPlaers.length > 1){
            console.log(`${sortedPlaers[0]} wins with ${players[sortedPlaers[0]]} votes`);
            console.log(`Runner up: ${sortedPlaers[1]}`);
            for (let system of sortedSystems){
                if (result[system]['candidate'] === sortedPlaers[1]){
                    console.log(system + ': ' + result[system]['votes'])
                }
            }
        } else {
            console.log(`${sortedPlaers[0]} wins with ${players[sortedPlaers[0]]} votes`);
            console.log(`${sortedPlaers[0]} wins unopposed!`);
        }
    } else {
        console.log(`Runoff between ${sortedPlaers[0]} with ${sortedPercents[0]}% and ${sortedPlaers[1]} with ${sortedPercents[1]}%`);
    }
}


// f([{system: 'Theta', candidate: 'Kitler', votes: 50},
//     {system: 'Theta', candidate: 'Space Cow', votes: 45},
//     {system: 'Theta', candidate: 'Huge Manatee', votes: 45},
//     {system: 'Theta', candidate: 'Flying Shrimp', votes: 45},
//     {system: 'Tau', candidate: 'Kitler', votes: 50},
//     {system: 'Tau', candidate: 'Space Cow', votes: 60},
//     {system: 'Sigma', candidate: 'Kitler', votes: 50},
//     {system: 'Sigma', candidate: 'Huge Manatee', votes: 60},
//     {system: 'Omicron', candidate: 'Kitler', votes: 50}
// ]);

// f([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
//     {system: 'Theta', candidate: 'Flying Shrimp', votes: 11},
//     {system: 'Omicron', candidate: 'Huge Manatee', votes: 5}]);


f([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);

console.log('----------------------------------------');

f([{system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
    {system: 'Tau', candidate: 'Space Cow', votes: 100},
    {system: 'Theta', candidate: 'Space Cow', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
    {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
    {system: 'Omicron', candidate: 'Octocat', votes: 75}]);

console.log('----------------------------------------');

f([{system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10},
    {system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);



