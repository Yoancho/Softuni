function f(str, word) {
    let startPart = str.slice(0, word.length);
    if (startPart == word) {
        console.log(true);
    } else {
        console.log(false);
    }
}


f('How have you been?', 'how');
f('The quick brown fox…', 'The quick brown fox…');
f('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta')