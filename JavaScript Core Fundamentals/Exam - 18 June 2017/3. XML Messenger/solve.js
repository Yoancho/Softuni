function f(str) {
    let validMsgRegex = /^<message((?:\s[a-z]+="[A-Za-z0-9 \.]{1,}")+)>([\s\S]*)<\/message>$/gm;
    let valid = validMsgRegex.exec(str);

    if (valid) {

        let from = /\bfrom="([A-Za-z 0-9 \.]{1,})"/gm.exec(valid[1]);
        let to = /\bto="([A-Za-z 0-9 \.]{1,})"/gm.exec(valid[1]);

        if (from && to) {
            let p = valid[2].split('\n');
            console.log(`<article>`);
            console.log(` <div>From: <span class="sender">${from[1]}</span></div>`);
            console.log(` <div>To: <span class="recipient">${to[1]}</span></div>`);
            console.log(` <div>`);
            for (let el of p) {
                console.log(`  <p>${el}</p>`);
            }
            console.log(` </div>`);
            console.log(`</article>`);
        } else {
            console.log("Missing attributes");
        }
    } else {
        console.log('Invalid message format');
    }
}


f('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');
console.log();
f('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>');
console.log();
f('<message from="Alice" timestamp="1497254112">Same old, same old</message>')
console.log();
f(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);
console.log();
f('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>');
console.log();
f('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>');