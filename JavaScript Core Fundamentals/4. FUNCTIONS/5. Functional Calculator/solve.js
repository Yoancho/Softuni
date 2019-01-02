function f(a, b, operator) {
    switch (operator){
        case '+' :
            console.log(a+b);
            break;
        case '-' :
            console.log(a-b);
            break;
        case '*' :
            console.log(a*b);
            break;
        case '/' :
            console.log(a/b);
            break;
        default:
            console.log('error')
    }
}

f(2, 4, '+');
f(3, 3, '/');
f(18, -1, '*');
f(18, -1, 'H');