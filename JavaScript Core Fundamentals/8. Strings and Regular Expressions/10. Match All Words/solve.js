function f(str) {
    let test = str.match(/\w+/g);
    console.log(test.join('|'))
}

f(`'A Regular Expression needs to have the global flag in order to match all occurrences in the text'`);