function f(str, word) {
    let check = str.indexOf(word);
    if (check != -1) {
        console.log(true);
    } else {
        console.log(false);
    }
}

f('How have you been?', 'how');
f('The quick brown fox…', 'The quick brown fox…');
f('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');