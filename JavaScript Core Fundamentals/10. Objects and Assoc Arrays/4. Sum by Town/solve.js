function f(arr) {
  let result = {};
    for (var i = 0; i < arr.length; i+=2) {
        let [town, income] = [arr[i], Number(arr[i+1])];
        if (result[town] == undefined){
            result[town] = income;
        } else {
            result[town] += income;
        }
    }
    console.log(JSON.stringify(result));
}

f([`Sofia` ,`20`,`Varna`,` 3`,`Sofia`,`5`,`Varna`,`4`]);

f(['Sofia','20','Varna','3','sofia','5','varna', '4'])