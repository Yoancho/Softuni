function f(input) {
    let regex =
        /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let element of input) {
        let match = regex.exec(element);
        if (match)
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
    }
}


f(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);
console.log();
f(['Jonathan - 2000 - Manager',
    'Peter - 1000 - Chuck',
    'George - 1000 - Team Leader']);