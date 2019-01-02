function f(str, command) {
    let twoNameRegex = /(?<=[ ]{1})[A-Z]{1}[A-Za-z]*[-]{1}[A-Za-z]+(?=[ ])/gm;
    let threeNameRegex = /(?<=[ ]{1})[A-Z]{1}[A-Za-z]*[-]{1}[A-Za-z]+[\.]{1}[-][A-Za-z]+(?=[ ])/gm;
    let airportRegex = /(?<=[ ]{1})[A-Z]{3}[\/]{1}[A-Z]{3}(?=[ ])/gm;
    let flightNumberRegex = /(?<=[ ]{1})[A-Z]{1,3}[0-9]{1,5}(?=[ ])/gm;
    let companiesRegex = /(?<=[\- ]{1})[A-Z]{1}[A-Za-z]*[\*]{1}[A-Za-z]+(?=[ ])/gm;

    let twoN = str.match(twoNameRegex);
    let threeN = str.match(threeNameRegex);
    let airport = str.match(airportRegex);
    let flightN = str.match(flightNumberRegex);
    let company = str.match(companiesRegex);

    let companies = company.join('').split('*').filter(e => e !== '').join(' ');
    let [a1, a2] = airport.join('').split('/').filter(e => e !== '');

    let name;
    if (twoN) {
        name = twoN.join('').split('-').filter(e => e !== '').join(' ');
    } else {
        name = threeN.join('').split('-').filter(e => e !== '').join(' ');
    }

    switch (command) {
        case 'name' : {
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
            break
        }
        case 'flight' : {
            console.log(`Your flight number ${flightN} is from ${a1} to ${a2}.`);
            break
        }
        case 'company' : {
            console.log(`Have a nice flight with ${companies}.`);
            break
        }
        case 'all' : {
            console.log(`Mr/Ms, ${name}, your flight number ${flightN} is from ${a1} to ${a2}. Have a nice flight with ${companies}.`);
            break
        }
    }
}

f('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');
console.log();
f(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');