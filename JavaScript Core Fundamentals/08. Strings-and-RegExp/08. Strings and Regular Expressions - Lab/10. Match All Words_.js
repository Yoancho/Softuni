function matchAllWords(str) {
    let res = str.match(/\w+\b/g);
    console.log(res.join('|'));
}
//matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords("A #%^ lo^#^t of@%*symbols(@i@%~n~)`this......sentence...123456789*&%#0:\"\">>?:{{!@#@@#$%The+_)(*&^%$#@!End.");