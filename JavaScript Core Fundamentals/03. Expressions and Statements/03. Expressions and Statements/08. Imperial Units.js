function convert([inch]) {
    [inch] = [inch].map(Number);
    let f = Math.floor(inch /12);

    let s = (inch % 12) * -1;
    if (s == 0) s = '-0';
    return(`${f}'${s}"`);
}