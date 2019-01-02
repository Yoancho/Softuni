function f(arr) {
    let result = {};

  arr.join(' ').split(/[^\w]+/g).filter(e => e !== '').forEach(s => {
      if (!result.hasOwnProperty(s)){
          result[s] = 0;
      }
      result[s] += 1;
  });
    console.log(JSON.stringify(result));
}


f([`Far`, `too`, `slow,`, `you're`, `far`, `too`, `slow.`]);