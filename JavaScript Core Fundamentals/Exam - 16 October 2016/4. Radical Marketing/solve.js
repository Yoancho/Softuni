function f(arr) {
    let result = new Map();
    for (let persona of arr) {

        let [p1, p2] = persona.split('-').filter(e => e !== '');

        if (p2 === undefined) {
            if (!result.has(p1)) {
                result.set(p1, []);
            }
        } else if (result.has(p2) && p1 !== undefined) {
            if (p1 !== p2) {

                if (!result.get(p2).includes(p1)) {
                    result.get(p2).push(p1);
                } else if (result.get(p1).includes(p2)) {
                    // result.get(k).set(p2, result.get(k).get(p2) + 1)
                }

            }

        }
    }

    let vip = [...result].sort((a, b) => {
        let diff = b[1].length - a[1].length;
        let countA = 0;
        let countB = 0;
        if (diff === 0) {
            for (let [k, v] of result) {
                if (v.includes(a[0])) {
                    countA++
                }
                if (v.includes(b[0])) {
                    countB++
                }
            }
            if (countA - countB === 0) {
                return 0
            } else {
                return countB - countA;
            }
        } else {
            return diff
        }

    });

    let first = vip[0][0];
    console.log(first);
    let c = 1;
    for (let p of vip) {
        for (let i of p[1]) {
            console.log(`${c}. ${i}`);
            c++;
        }
        break;
    }
}



f([
    'A',
    'B',
    'C',
    'A-B',
    'D-A'
]);

console.log(`B
1. A`);


// f([
//     'A'
//     , 'B'
//     , 'A-B'
//     , 'C'
//     , 'C-B'
//     , 'D'
//     , 'D-B'
//     , 'E'
//     , 'E-B'
//     , 'A-C'
//     , 'D-C'
//     , 'E-C'
// ]);
// console.log(`B
// 1. A
// 2. C
// 3. D
// 4. E`);

// f([
//     'A',
//     'B',
//     'C',
//     'D',
//     'A-B',
//     'B-A',
//     'C-A',
//     'D-A']);
// console.log();
//
// f([
//     'J',
//     'G',
//     'P',
//     'R',
//     'C',
//     'J-G',
//     'G-J',
//     'P-R',
//     'R-P',
//     'C-J']);