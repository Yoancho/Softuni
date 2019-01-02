function f(str) {
    let length = Number(str.match(/^\d{1,}/g)[0]);
    let lengthRegex = new RegExp(`[\\s\\S]{${length}}`, 'g');

    let newString = str.replace(length, '');
    if (newString.match(lengthRegex)) {
        newString = newString.match(lengthRegex)[0];
    }

    let splitter = newString[newString.length - 1];
    let [part1, part2] = newString.split(splitter).filter(e => e !== '');
    let part1Regex = new RegExp(`[${part1}]`, 'g');
    let part2Regex = /[#]/g;
    part2 = part2.replace(part1Regex, '');
    part2 = part2.replace(part2Regex, ' ');
    console.log(part2);
}

f(`47*0-9%&+I0'm0#a#stu99%d%e&nt#a9t#So00ft%Uni*!+`);
console.log();
f(`67%!3-7=@+Ja45v=aS67cri!pt#Co%@@re#-#Fun4%!d=am6e@5n7t%!als#-#2018+`);