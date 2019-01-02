function f(arr) {
    const nameRegex = /([*]{1}[A-Z]{1}[a-z]+)($| |\t)/gm;
    const phoneRegex = /([+][0-9\-]{10})($| |\t)/gm;
    const idRegex = /([!][a-zA-Z0-9]+)($| |\t)/gm;
    const baseRegex = /([_][a-zA-Z0-9]+)($| |\t)/gm;
    let result = [];

    for (let txt of arr) {
       let n = nameRegex.exec(txt);
       if (n) {
           txt = txt.replace( n[1] , '|'.repeat(n[1].length));
       }
        let p = phoneRegex.exec(txt);
        if (p) {
            txt = txt.replace( p[1] , '|'.repeat(p[1].length));
        }
        let i = idRegex.exec(txt);
        if (i) {
            txt = txt.replace( i[1] , '|'.repeat(i[1].length));
        }
        let b = baseRegex.exec(txt);
        if (b) {
            txt = txt.replace( b[1] , '|'.repeat(b[1].length));
        }
        result.push(txt)

    }
result.forEach(e=> console.log(e))

}

f([`Agent *Ivankov was in the room when it all happened.`,
    `The person in the room was heavily armed.`,
    `Agent *Ivankov had to act quick in order.`,
    `He picked up his phone and called some unknown number.`,
    `I think it was +555-49-796`,
    `I can't really remember...`,
    `He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21`,
    `Then after that he disappeared from my sight.`,
    `As if he vanished in the shadows.`,
    `A moment, shorter than a second, later, I saw the person flying off the top floor.`,
    `I really don't know what happened there.`,
    `This is all I saw, that night.`,
    `I cannot explain it myself...`]);