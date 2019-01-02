function f(items) {
    return '<ul>\n' +
        items.map(htmlEscape).map(
            i => ' <li>${i}</li>').join('\n') + '</ul>\n';

    function htmlEscape(text) {
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'}
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}


f(['<b>unescaped text</b>', 'normal text']);
console.log(`<ul>
  <li>&lt;b&gt;unescaped text&lt;/b&gt;</li>
  <li>normal text</li>
</ul>
`);