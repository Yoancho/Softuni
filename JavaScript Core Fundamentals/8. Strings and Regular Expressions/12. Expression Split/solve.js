function f(str) {
    let regex = /[ (),;.]+/g;
    let result = str.split(regex);
    console.log(result.join('\n'));
}

f('let sum = 4 * 4,b = "wow";');
console.log('-------------------------------')
f('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');