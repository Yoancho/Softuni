//(arr) => arr.filter((x, i) => i%2 == 0).join(" ")   //   bez ';'    ???

function evenPosition(arr) {
    let result = [];
    for (var i = 0; i <= arr.length-1; i+=2) {
        result.push(arr[i]);
    }
        return result.join(' ');
}
console.log(evenPosition(['20', '30', '40']));
console.log(evenPosition(['5', '10']));
//console.log(evenPosition(['20', '30', '40']));
