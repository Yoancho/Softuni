function f(arr) {
    let delim = arr.pop();
    console.log(arr.join(`${delim}`));
}

f(['One', `Two`, `Three`, `Four`, `Five`, `-`]);
console.log();
f(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);