function f(arr) {
    let result = '<table>\n';
    for (let el of arr) {
        let obj = JSON.parse(el);
        result += '    <tr>\n';
        result += `        <td>${obj['name']}</td>\n`;
        result += `        <td>${obj.position}</td>\n`;
        result += `        <td>${obj.salary}</td>\n`;
        result += '    <tr>\n';
    }
    result+= '</table>';
    console.log(result);
}

f(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);