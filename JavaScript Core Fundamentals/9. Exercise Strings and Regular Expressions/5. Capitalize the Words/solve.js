function f(str) {
    let result = [];
    let test = str.toLowerCase().split(' ');
    for (let el of test) {
        el = el.replace(el[0][0], el[0][0].toUpperCase());
        result.push(el);
    }
    console.log(result.join(' '));
}

f('Capitalize these words');
f('Was that Easy? tRY thIs onE for SiZe!');