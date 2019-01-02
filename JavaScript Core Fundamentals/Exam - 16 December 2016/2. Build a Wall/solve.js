function f(arr) {
    arr = arr.map(Number);
    let arrayOfDaylyConcrete = [];
    let allNeedConcrete = 0;

    for (let i = 0; i <= 30; i++) {
        let daylyConcrete = 0;
        for (let j = 0; j <= arr.length; j++) {
            if (arr[j] < 30) {
                arr[j] += 1;
                daylyConcrete += 195;
            }
        }
        arrayOfDaylyConcrete.push(daylyConcrete);
        allNeedConcrete += daylyConcrete;
    }

    console.log(arrayOfDaylyConcrete.filter(e => e != 0).join(', '));
    console.log(allNeedConcrete * 1900 + ' pesos');
}


f([21, '25', '28']);
f(['17']);
f([17, 22, 17, 19, 17]);