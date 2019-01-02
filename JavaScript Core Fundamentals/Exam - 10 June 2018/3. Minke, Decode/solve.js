function f(arr) {
    let [a, b, word, text] = arr;
    [a, b] = [Number(a), Number(b)];

    var wordRegex = /[A-Z]{1}[a-z]+[A-Z]{1}/g;

    //let match = text.match(wordRegex).join('');
    let match = wordRegex.exec(text).join('');
    let toCut = match.slice(a, b+1);
    let newWord = match.replace(toCut, word);
    newWord = newWord.replace(newWord[newWord.length-1], newWord[newWord.length-1].toLowerCase());


    let digits = text.match(/[0-9.]{3,}/gm).map(d => String.fromCharCode(Math.ceil(d)));
    digits[0] = digits[0].toUpperCase()

    console.log(`${newWord} => ${digits.join('')}`);

}


//f(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])
console.log()
f(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])