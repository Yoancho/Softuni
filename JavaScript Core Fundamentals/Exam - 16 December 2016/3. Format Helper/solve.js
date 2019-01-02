function f(arr) {
    let str = arr[0];

    regex1 = / {0,}([.,!?:;]) {0,}/gm;
    regex2 = /(\.) {0,}(\d)/gm;
    regex3 = /" {0,}(.+?) {0,}"/gm;
    regex4 = /([.,!?:;]) {1,}(?=[.,!?:;])/gm;

    str = str.replace(regex1, (match, g1) => `${g1} `);
    str = str.replace(regex2, (match, g1, g2) => `${g1}${g2}`);
    str = str.replace(regex3, (match, g1) => `"${g1}"`);
    str = str.replace(regex4, (match, g1) => `${g1}`);


    console.log(str);
}


f(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);

console.log('Terribly formatted text. With chaotic spacings. "Terrible quoting"! Also this date is pretty confusing: 20.12.16.');

f(['Make,sure to give:proper spacing where is needed... !']);

console.log('Make, sure to give: proper spacing where is needed...!');

f(['Now let\'s test           , absolutely everything!Aposiopesis is this: ...Have! you read the constraints?, you squidward? It would be pretty sad if this also fails "         !It would be bad if you don\'t put space after the explanation at start,aposiopesis all the way...". Now; 8   . 1 3. 0x041       .   I hope this will be trimmed too     !']);
console.log('Now let\'s test, absolutely everything! Aposiopesis is this:... Have! you read the constraints?, you squidward? It would be pretty sad if this also fails "! It would be bad if you don\'t put space after the explanation at start, aposiopesis all the way...". Now; 8.1 3.0x041. I hope this will be trimmed too!')