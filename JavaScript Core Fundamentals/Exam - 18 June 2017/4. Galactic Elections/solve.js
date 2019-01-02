function f(arr) {
    let result = {};
    let systemWinner = new Map();
    let second = [];
    let allVote = 0;
    for (let obj of arr) {
        let [system, candidate, votes] = [obj.system, obj.candidate, obj.votes];
        allVote += votes;

        if (!result.hasOwnProperty(system)) {
            result[system] = {};
            result[system][candidate] = Number(votes);
            result[system]['total_votes'] = Number(votes);

        } else if (!result[system].hasOwnProperty(candidate)) {
            result[system][candidate] = Number(votes);
            result[system]['total_votes'] += Number(votes);
        } else {
            result[system][candidate] += votes;
            result[system]['total_votes'] += Number(votes);

        }
    }

    let sortedSystemVote = Object.keys(result).sort((s1, s2) => {
        let diffInVote = result[s2]['total_votes'] - result[s1]['total_votes'];
        return diffInVote
    });

    for (let system of sortedSystemVote) {

        let sortedSystemCandidate = Object.keys(result[system]).filter(e => e !== 'total_votes').sort((c1, c2) => {
            let diff = result[system][c2] - result[system][c1];
            return diff;
        });

        let first = sortedSystemCandidate[0];
        second.push({name: first, vote: result[system]['total_votes'], system: system});
        if (!systemWinner.has(first)) {
            systemWinner.set(first, {system: system, vote: result[system]['total_votes']});

        } else {
            let t = systemWinner.get(first).vote;
            systemWinner.get(first).vote = t + result[system]['total_votes'];
        }


    }

    for (let [winner, obj] of systemWinner) {
        let system = obj.system;
        let vote = obj.vote;
        if (allVote / 2 < vote) {
            let count = 0;
            let runnerUp;
            if (systemWinner.size > 1) {
                for (let [w, o] of systemWinner) {
                    count++

                    let v = o.vote;
                    let s = o.system;
                    if (count === 1) {
                        console.log(`${w} wins with ${v} votes`);
                    } else if (count === 2) {
                        console.log(`Runner up: ${w}`);
                        runnerUp = w;
                    }
                }
                for (let el of second) {
                    let name = el.name;
                    let vote = el.vote;
                    if (name === runnerUp) {
                        console.log(`${el.system}: ${vote}`);
                    }
                }

            } else {
                console.log(`${winner} wins with ${vote} votes`);
                console.log(`${winner} wins unopposed!`);
            }
            return
        } else {
            let objectValues = Array.from(systemWinner.values());
            let mapKeys = Array.from(systemWinner.keys());
            let firstName = mapKeys[0];
            let firstVote = objectValues[0].vote;
            let secondName = mapKeys[1];
            let secondVote = objectValues[1].vote;
            console.log(`Runoff between ${firstName} with ${Math.floor(firstVote / allVote * 100)}% and ${secondName} with ${Math.floor(secondVote / allVote * 100)}%`);
        }
        return
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

f([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Omicron', candidate: 'Huge Manatee', votes: 5}]);

console.log('----------------------------------------');

// f([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
//     {system: 'Sigma', candidate: 'Space Cow', votes: 200},
//     {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
//     {system: 'Tau', candidate: 'Space Cow', votes: 15},
//     {system: 'Sigma', candidate: 'Space Cow', votes: 60},
//     {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);
//
// console.log('----------------------------------------');
//
// f([{system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
//     {system: 'Tau', candidate: 'Space Cow', votes: 100},
//     {system: 'Theta', candidate: 'Space Cow', votes: 10},
//     {system: 'Sigma', candidate: 'Space Cow', votes: 200},
//     {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
//     {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
//     {system: 'Omicron', candidate: 'Octocat', votes: 75}]);
//
// console.log('----------------------------------------');
//
// f([{system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10},
//     {system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200},
//     {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);



