function printLetter(str) {
    for (let charPosition in str) {
        console.log(`str[${charPosition}] -> ${str[charPosition]}`);
    }
}
printLetter('Hello, World!');