function find(str) {
    let pattern = /_(\w+)\b/g[$1];
    let n = str.match(pattern);
    console.log(n.join(','));
}
find('Calculate the _area of the _perfectRectangle object.');
