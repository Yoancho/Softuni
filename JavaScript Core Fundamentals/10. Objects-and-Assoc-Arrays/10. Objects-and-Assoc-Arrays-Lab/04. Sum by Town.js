function sumOfTown(arr) {
    let result = {};
    for (var i = 0; i < arr.length; i+= 2) {
        let [town , income] = [arr[i], Number(arr[i+1])] ;
        if(result[town] == undefined){
            result[town] = income;
        }else {
            result[town] += income;
        }
    }
    return JSON.stringify(result);
}
console.log(sumOfTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']));