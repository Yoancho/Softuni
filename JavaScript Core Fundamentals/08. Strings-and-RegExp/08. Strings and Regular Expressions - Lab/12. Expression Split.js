function expressionSplit(expression) {

    let elements = expression
        .split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}
