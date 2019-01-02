function f([k,...num]) {
    let firstK = num.slice(0, k);
    let lastK = num.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

f([2, 7, 8, 9]);