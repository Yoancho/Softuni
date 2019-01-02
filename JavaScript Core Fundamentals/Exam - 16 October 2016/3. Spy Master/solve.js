function f(arr) {
    let key = arr.shift();

    let keyRegex = new RegExp(`(?<= |^)(${key}) +([A-Z%#!$]{8,})(?: |\\.|\,|$)`, 'igm');
    for (let line of arr) {

        let exec;
        while (exec = keyRegex.exec(line)) {

            let upperCase = exec[2].toUpperCase();
            if (exec[2] === upperCase) {
                let message = exec[2];
                let tempMsg = [];
                let index = exec.index;
                for (let char of message) {
                    switch (char) {
                        case '!': {
                            tempMsg.push(1);
                            break
                        }
                        case '%': {
                            tempMsg.push(2);
                            break
                        }
                        case '#': {
                            tempMsg.push(3);
                            break
                        }
                        case '$': {
                            tempMsg.push(4);
                            break
                        }
                        default :
                            tempMsg.push(char.toLowerCase());
                    }
                }

                line = line.replace(message, tempMsg.join(''));

            }
        }

        console.log(line);
    }

}


// f(['specialKey',
//     'In this text the specialKey HELLOWORLD! is correct, but',
//     `the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while`,
//     `SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`]);
//
// console.log();

f([
    'tricky',
    'And now the tricky tests',
    'Tricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%',
    'Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -',
    'Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE',
    'Be very carefull now trICkY plainwrong, trICkY PLAINWRONG',
    'next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS',
    'It\'s tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,',
    'now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.',
    'DON\'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.',
    'Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow']);
