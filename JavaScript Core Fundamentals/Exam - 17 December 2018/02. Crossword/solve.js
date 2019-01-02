function f(matrix) {
    let result = [];
    for (let arr of matrix) {

        let [c1, c2, n, word] = [...arr];
        switch (c1) {
            case 'filter': {
                if (c2 === 'UPPERCASE') {
                    let temp = [];
                    for (var i = 0; i < word.length; i++) {
                        if (word[i] === word[i].toUpperCase() && isNaN(parseInt(word[i]))) {
                            temp.push(word[i]);
                        }
                    }
                    result.push(temp[n - 1]);
                } else if (c2 === 'LOWERCASE') {
                    let temp = [];
                    for (var i = 0; i < word.length; i++) {
                        if (word[i] === word[i].toLowerCase() && isNaN(parseInt(word[i]))) {
                            temp.push(word[i]);
                        }
                    }
                    result.push(temp[n - 1]);
                } else if (c2 === 'NUMS') {
                    let temp = [];
                    for (var i = 0; i < word.length; i++) {
                        if (parseInt(word[i])) {
                            temp.push(word[i]);
                        }
                    }
                    result.push(temp[n - 1]);
                }
                break
            }
            case 'sort': {
                let temp = Array.from(word);
                if (c2 === 'A') {
                    temp = temp.sort((a, b) => a.localeCompare(b));
                } else if (c2 === 'Z') {
                    temp = temp.sort((a, b) => b.localeCompare(a))
                }
                result.push(temp[n - 1]);

                break
            }
            case 'rotate': {
                let temp = Array.from(word);

                for (let i = 0; i < Number(c2) % temp.length; i++) {
                    let tmp = temp.pop();
                    temp.unshift(tmp)
                }
                result.push(temp[n - 1]);
                break
            }
            case 'get': {
                let temp = Array.from(n);
                result.push(temp[c2 - 1]);
                break
            }
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