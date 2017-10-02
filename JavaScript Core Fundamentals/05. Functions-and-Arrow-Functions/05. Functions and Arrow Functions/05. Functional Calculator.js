function calculate([a, b, oper]) {
    [a,b] = [a, b].map(Number);
    if (oper == '+'){
        return a+b;
    }
    else if(oper == '-'){
        return a-b;
    }
    else if (oper == '*'){
        return a*b;
    }
    else if (oper == '/'){
        return a/b;
    }
}
console.log(calculate(['2', '4', '+']));
console.log(calculate(['3', '3', '/']));
console.log(calculate(['18', '-1', '*']));