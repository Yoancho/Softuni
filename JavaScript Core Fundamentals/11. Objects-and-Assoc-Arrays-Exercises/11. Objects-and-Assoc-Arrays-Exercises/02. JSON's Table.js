function JSONparse(arr) {
        console.log(`<table>`);
        for (let line of arr) {
            let lineParse = JSON.parse(line);
            let name = lineParse[`name`];
            let position = lineParse[`position`];
            let salary = lineParse[`salary`];


            console.log(`    <tr>`);
            console.log(`        <td>${name}</td>`);
            console.log(`        <td>${position}</td>`);
            console.log(`        <td>${salary}</td>`);
            console.log(`    </tr>`);

        }
    console.log(`</table>`);
}
JSONparse([`{"name":"Pesho","position":"Promenliva","salary":100000}`,
    `{"name":"Teo","position":"Lecturer","salary":1000}`,
    `{"name":"Georgi","position":"Lecturer","salary":1000}`]);