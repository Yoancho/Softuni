function f(arr) {
    let result = new Map();
    arr.join(' ').toLowerCase().split(/[^\w]+/g).filter(e => e !== '').forEach(word => {
        if (!result.has(word)) {
            result.set(word, 0);
        }
        result.set(word, result.get(word) + 1);
    });

    let sottedKeys = Array.from(result.keys()).sort();

    for (let el of sottedKeys) {
        console.log(`'${el}' -> ${result.get(el)} times`)
    }
}

f(['Far', 'too', 'slow,', `you're`, 'far', 'too', 'slow.']);