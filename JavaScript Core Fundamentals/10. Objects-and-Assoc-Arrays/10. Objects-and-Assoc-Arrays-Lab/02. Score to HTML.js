function scoreToHTMLTable([scoreJSON]) {
    let html = "<table>\n";
    html += "   <tr><th>name</th><th>score</th>"
}function scoreToHTMLTable([scoreJSON]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th>\n";
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr)
        html += `  <tr><td>${htmlEscape(obj['name'])}` +
            `</td><td>${obj['score']}</td></tr>\n`;
    return html + "</table>";
    function htmlEscape(text) { // TODO
    "use strict";
        return text.replace(/[\"&'\/<>]/g, function (a) {
                return {
                    '"': '&quot;', '&': '&amp;', "'": '&#39;',
                    '/': '&#47;',  '<': '&lt;',  '>': '&gt;'
                }[a];
            });
        }
    }

    console.log(scoreToHTMLTable(['[{"name":"Pesho","score":70}]']));