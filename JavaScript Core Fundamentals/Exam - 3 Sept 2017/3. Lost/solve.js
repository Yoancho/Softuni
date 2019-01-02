function f(keyword, text) {

    let messageRegex = new RegExp(`${keyword}(.*?)${keyword}`, 'gmi');
    let message = messageRegex.exec(text)[1];
    let regex = /(north|east).*?(\d{2}).*?(\,).*?(\d{6})/gmi;


    let coordinates;
    let N = ``;
    let E = ``;

    while (coordinates = regex.exec(text)) {
       if(coordinates[1].toLowerCase() === 'north'){
           N = `${coordinates[2]}.${coordinates[4]} N`;
       } else {
           E = `${coordinates[2]}.${coordinates[4]} E`;
       }
    }

    console.log(N);
    console.log(E);
    console.log(`Message: ${message}`);
}

f(`<>`, `o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b`);
console.log();
f(`4ds`, `eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532`);
console.log();
f('&amp' , '(&ampThe only time to eat diet food is while you\'re waiting for the steak to cook&amp(east)(23),(234567) NORTH 48 ,(((543678');

