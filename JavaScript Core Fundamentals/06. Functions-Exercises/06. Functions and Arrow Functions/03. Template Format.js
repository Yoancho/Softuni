function xml(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log(`<quiz>`);
    for (let i = 0; i < input.length; i+=2) {
        let s1 = input[i];
        let s2 = input[i+1];
        console.log(' <question>');
        console.log(`   ${s1}`);
        console.log(" </question>");
        console.log(` <answer>`);
        console.log(`    ${s2}`);
        console.log(` </answer>`);
    }
console.log('</quiz>');
}
//xml(["Who was the forty-second president of the U.S.A.?","William Jefferson Clinton"]);
xml(["Dry ice is a frozen form of which gas?", "Carbon Dioxide","What is the brightest star in the night sky?","Sirius"]);