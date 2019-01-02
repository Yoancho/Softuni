function f(arr) {
    let result = new Map();

    let geneNameRegex = /[!@#$?]([a-zA-Z]+)/gm;
    //let geneNameRegex = /([a-zA-Z]+)(?=[(!@#$?)])/gm;


    for (let element of arr) {
        if (element === 'Stop!') {
            break
        }


        let name = '';

        let match;

        match = geneNameRegex.exec(element);
        while (match != null) {
            name += match[1];
            match = geneNameRegex.exec(element);
        }

        let lengthOfName = Number(element.match(/(?<=\=)[0-9]+/g));
        let countOfGenes = Number(element.match(/(?<=\-\-)[0-9]+/g));
        let o = element.match(/(?<=\<\<)[a-z]+/g);
        let organism;
        if (o !== null) {
            organism = o[0]
        }
        if (name.length === lengthOfName && countOfGenes !== 0 && organism !== null) {
            if (!result.has(organism)) {
                result.set(organism, 0);
            }
            result.set(organism, result.get(organism) + countOfGenes);

        }
    }
    

    let sortedVallues = new Map([...result.entries()].sort((a, b) => b[1] - a[1]));

    for (let [k, v] of sortedVallues) {
        console .log(`${k} has genome size of ${v}`)
    }

}



f([`!@ab?si?di!a@=7--152<<human`
,`b!etu?la@=6--321<<dog`
,`!curtob@acter##ium$=14--230<<dog`
,`!some@thin@g##=9<<human`
,`Stop!`]);
console.log();

f([`=12<<cat`
,`!vi@rus?=2--142`
,`?!cur##viba@cter!!=11--800<<cat`
,`!fre?esia#=7--450<<mouse`
,`@pa!rcuba@cteria$=13--351<<mouse`
,`!richel#ia??=8--900<<human`
,`Stop!`]);

console.log()

f([`!@ру?би#=4--57<<polecat`
,`?do?@#ri#=4--89<<polecat`
,`=12<<cat`
,`!vi@rus?=2--142`
,`@pa!rcu>ba@cteria$=13--234<<mouse`
,`?!cur##viba@cter!!=11--680<<cat`
,`Stop!`]);
