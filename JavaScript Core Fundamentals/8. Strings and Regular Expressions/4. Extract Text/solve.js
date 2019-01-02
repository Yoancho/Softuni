function f(str) {
    let startIndex = str.indexOf('(');
    let endIndex = str.indexOf(')', startIndex + 1 );

    let result = [];
    while (endIndex > -1) {
        let text = str.substring(startIndex + 1, endIndex);
        startIndex = str.indexOf('(', startIndex + 1);
        endIndex = str.indexOf(')', endIndex+1);
        result.push(text);
    }
    console.log(result.join(', '));
}


f('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
