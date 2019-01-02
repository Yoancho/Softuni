function f(str) {
    let regex = /\b(_{1})([A-Za-z0-9]+)\b/gm;
  let exec;
  let result = [];

  while (exec = regex.exec(str)){
      result.push(exec[2]);
  }
    console.log(result.join(','));
}

f(`The _id and _age variables are both integers.`);
f('Calculate the _area of the _perfectRectangle object.');
f('__invalidVariable _evenMoreInvalidVariable_ _validVariable');