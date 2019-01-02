function main(input) {
    let log = new Map();
    let subscriptions = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split("-");

        if (currentCommand.length === 2) {
            if(log.has(currentCommand[0]) && log.has(currentCommand[1])) {
                log.get(currentCommand[1]).add(currentCommand[0]);
                subscriptions.get(currentCommand[0]).add(currentCommand[1]);
            }
        } else {
            if(!log.has(currentCommand[0])) {
                log.set(currentCommand[0], new Set());
                subscriptions.set(currentCommand[0], new Set());
            }
        }
    }

    var sortedLog = new Map([...log.entries()].sort(function(firstEntry, secondEntry) {
        let firstEntryName = firstEntry[0];
        let firstEntrySubscribers = firstEntry[1].size;

        let secondEntryName = secondEntry[0];
        let secondEntrySubscribers = secondEntry[1].size;

        let result = secondEntrySubscribers - firstEntrySubscribers;

        if(result == 0) {
            let firstEntrySubscriptions = subscriptions.get(firstEntryName).size;
            let secondEntrySubscriptions = subscriptions.get(secondEntryName).size;

            result = secondEntrySubscriptions - firstEntrySubscriptions;
        }

        return result;
    }));

    let mostImportantPerson = [...sortedLog.entries()][0];
    console.log(mostImportantPerson[0]);

    let count = 1;
    mostImportantPerson[1].forEach(function(e){
        console.log(count + ". " + e);
        count++;
    });
}

// let arr = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "A-B",
//     "B-A",
//     "C-A",
//     "D-A"
// ];

// let arr = [
//     "J",
//     "G",
//     "P",
//     "R",
//     "C",
//     "J-G",
//     "G-J",
//     "P-R",
//     "R-P",
//     "C-J"
// ];

// let arr = [
//     "A",
//     "B",
//     "A-B",
//     "C",
//     "C-B",
//     "D",
//     "D-B",
//     "E",
//     "E-B",
//     "A-C",
//     "D-C",
//     "E-C"
// ];

// let arr = [
//     "Z",
//     "O",
//     "P",
//     "Q",
//     "Z-O",
//     "P-O",
//     "O-Z",
//     "O-P"
// ];

// let arr = [
//     "F",
//     "E",
//     "F-E",
//     "E-F",
//     "V",
//     "V-F",
//     "H",
//     "H-F"
// ];

// let arr = [
//     "A",
//     "B",
//     "C",
//     "A-B",
//     "B-A",
//     "A-C"
// ];

// let arr = [
//     "Z",
//     "O",
//     "R",
//     "D",
//     "Z-O",
//     "R-O",
//     "D-O",
//     "P",
//     "O-P",
//     "O-Z",
//     "R-Z",
//     "D-Z"
// ];

// let arr = [
//     "A",
//     "B",
//     "B-A",
//     "C",
//     "A-B",
//     "C-B",
//     "C-A"
// ];

// let arr = [
//     "T",
//     "E",
//     "S",
//     "T-E",
//     "E-S",
//     "S-T"
// ];

// let arr = [
//     "A",
//     "B",
//     "C",
//     "A-B",
//     "D-A"
// ];

// let arr = [
//     "P",
//     "P-R",
//     "R",
//     "P-R",
//     "P-E",
//     "E",
//     "P-E",
//     "P-L",
//     "L",
//     "P-L",
//     "P-A",
//     "A",
//     "P-A",
//     "P-S",
//     "S",
//     "P-S",
//     "P-T",
//     "T",
//     "P-T",
//     "T-P"
// ];

// let arr = [
//     "T",
//     "E",
//     "S",
//     "T",
//     "D-D",
//     "Q-P",
//     "R-D"
// ];

// main(arr);