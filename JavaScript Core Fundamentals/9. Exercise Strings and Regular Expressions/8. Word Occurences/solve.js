function f(txt, wrd) {
    let regex = new RegExp('\\b' + wrd + '\\b', 'gmi');
    let t = txt.match(regex);
    if (t === null) {
        t = [];
    }

    console.log(t.length);
}

f(`The waterfall was so high, that the child couldn’t see its peak.`, `The`);

f(`How do you plan on achieving that? How? How can you even think of that?`, `How`);