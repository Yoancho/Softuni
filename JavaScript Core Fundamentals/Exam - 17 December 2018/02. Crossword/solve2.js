function f(matrix) {
    let result = [];
    for (let arr of matrix) {
        let [c1, c2, n, word] = [...arr];
        if (c1 === 'filter') {
            if (c2 === 'UPPERCASE') {
                let match = word.match(/[A-Z]/g);
                result.push(match[n - 1])
            } else if (c2 === 'LOWERCASE') {
                let match = word.match(/[a-z]/g);
                result.push(match[n - 1])
            } else if (c2 === 'NUMS') {
                let match = word.match(/[0-9]/g);
                result.push(match[n - 1])
            }
        } else if (c1 === 'sort') {
            let temp = Array.from(word);
            if (c2 === 'A') {
                temp = temp.sort();
            } else if (c2 === 'Z') {
                temp = temp.sort().reverse();
            }
            result.push(temp[n - 1]);
        } else if (c1 === 'rotate') {
            let temp = Array.from(word);

            for (let i = 0; i < Number(c2) % temp.length; i++) {
                let tmp = temp.pop();
                temp.unshift(tmp)
            }
            result.push(temp[n - 1]);
        } else if (c1 === 'get') {
            let temp = Array.from(n);
            result.push(temp[c2 - 1]);
        }
    }
    console.log(result.join(''));
}




f([["filter", "UPPERCASE", 4, "AkIoRpSwOzFdT"],
    ["sort", "A", 3, "AOB"],
    ["sort", "A", 3, "FAILCL"],
    ["sort", "Z", 2, "OUTAGN"],
    ["filter", "UPPERCASE", 2, "01S345U7N"],
    ["rotate", 2, 2, "DAN"],
    ["get", 2, "PING"],
    ["get", 3, "?- 654"],
    ["filter", "NUMS", 1, "54318"]
]);