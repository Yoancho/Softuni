function f(str) {

   let arr = JSON.parse(str);
    let result = '<table>\n'
    result += ' <tr><th>name</th><th>score</th></tr>\n';

    for (let obj of arr) {
        let name = htmlEscape(obj['name']);
        let score = htmlEscape(obj['score'] + ''); // => + '' make number - string
        result += ` <tr><td>${name}</td><td>${score}</td></tr>\n`;
    }
    result += '</table>';

    // function htmlEscape(text) {
    //     let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'}
    //     return text.replace(/[\"&'<>]/g, ch => map[ch]);
    // }

    function htmlEscape(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log(result);
}


f('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');

f('[{"name": "Pesho & Kiro", "score": 479}, {"name": "Gosho, Maria & Viki", "score": 205}]');