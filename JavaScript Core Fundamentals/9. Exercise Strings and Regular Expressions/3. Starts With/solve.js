function f(str, sub) {
    let regex = new RegExp(sub);
    if (regex.test(str)) {
        console.log(true)
    } else {
        console.log(false);
    }
}

f('How have you been?', 'how');
f('The quick brown fox…', 'The quick brown fox…');
f('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta')