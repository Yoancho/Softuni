function f(arr) {
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+){1,}/g;
    let result = [];
    for (let txt of arr) {
        result.push(txt.match(regex));
    }
    console.log(result.filter(e => e != null).join('\n'));
}

f(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);