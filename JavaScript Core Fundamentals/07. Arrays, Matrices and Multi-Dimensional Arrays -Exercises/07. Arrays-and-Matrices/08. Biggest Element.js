function biggestNum(arr) {
    [arr].map(Number);
    let i = arr.join(" ").split(" ").sort((a,b)=> b-a);
    let result = i.shift();
    return result;
}
//console.log(biggestNum(['20 50 10','8 33 145']));
console.log(biggestNum([3, 5, 17, 12, 91],[5, -1, 7, 4],[33, 6, 22, 1, 8, 99, 3, 10, 43]));
//console.log(biggestN,um(['3 5 7 12','-1 4 33 2','8 3 0 4']));