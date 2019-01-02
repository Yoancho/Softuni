function f(arr) {
    let result = '<ul>\n';

    for (let text of arr) {
        result += `  <li>${htmlEscape(text)}</li>\n`
    }
    console.log(result + '</ul>')

    function htmlEscape(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}


f(['<b>unescaped text</b>', 'normal text']);
console.log(`<ul>
  <li>&lt;b&gt;unescaped text&lt;/b&gt;</li>
  <li>normal text</li>
</ul>
`)