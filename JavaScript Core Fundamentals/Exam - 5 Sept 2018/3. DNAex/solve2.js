function f(inp) {
    let entries = {};
    let patt = /([a-z\!\@\#\$\?]+)=([\d]+)--([\d]+)<<([a-z]+)/;

    for (let l of inp) {
        if (l === 'Stop!'){
            break;
        }
        let matches = l.match(patt);
        
        if (matches){
            let name = matches[1].replace(/([^a-z0-9]+)/gi, '');
            if (name.length== matches[2]){

                if (!entries.hasOwnProperty(matches[4])){
                    entries[matches[4]] = +matches[3];
                } else {
                    entries[matches[4]] += +matches[3];
                }
            }
        }

    }

    let sorted = [];

    for (let e in entries) {
        sorted.push([e, entries[e]]);
    }
    sorted.sort((a,b) => {
        return b[1] - a[1];
    });

    sorted.forEach(x => console.log(`${x[0]} has genome size of ${x[1]}`))

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
