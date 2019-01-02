function f(str) {
    let regex = /\b_{1}[A-Za-z0-9]+\b/gm;
    let result = str.match(regex).join('').match(/[A-Za-z]+/g);
    console.log(result.join(','))
}


f(`The _id and _age variables are both integers.`);
f('Calculate the _area of the _perfectRectangle object.');
f('__invalidVariable _evenMoreInvalidVariable_ _validVariable');