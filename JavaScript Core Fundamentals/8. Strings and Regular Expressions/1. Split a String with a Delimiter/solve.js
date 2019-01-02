function f(str) {
    let t = Array.from(str);
    t.forEach((e, i) => console.log(`str[${i}] -> ${e}`));
}

f('Hello, World!');