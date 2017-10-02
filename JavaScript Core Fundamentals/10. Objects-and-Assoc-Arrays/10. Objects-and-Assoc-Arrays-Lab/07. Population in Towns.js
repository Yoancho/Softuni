function populationInTowns(dataRows) {
    let total = new Map();
    for (let dataRow of dataRows) {
        let [town, population] = dataRow.split(/\s*<->\s*/);
        population = Number(population);
        if (total.has(town))
            total.set(town, total.get(town) + population);
        else total.set(town, population);
    }
    for (let [town, sum] of total)
        console.log(town + " : " + sum);
}
populationInTowns(['B<->20', 'A<->30', 'B<->5']);
populationInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);