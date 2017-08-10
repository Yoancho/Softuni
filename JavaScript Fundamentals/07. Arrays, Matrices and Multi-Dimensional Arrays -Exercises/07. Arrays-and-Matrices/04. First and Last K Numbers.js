function fistAndLastK(arr) {
    let k = Number(arr [0]);
    let first = [];
    let last = [];

    for(let i = 1; i <= k; i++ ){
        first.push(arr[i]);
        if(i<0)break;
    }

    for(let j = (arr.length)-k ; j <= arr.length-1 ; j++){
        last.push(arr[j]);
    }
    console.log(first);
    console.log(last);
}