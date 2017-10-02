function solve(xml) {

    if(!xml.includes('from=') || !xml.includes('to=')) {
        console.log("Missing attributes");
        return;
    }


    let fromToRegex = /^<message from="(.*)" to="(.*)">(.*)<\/message>$/gm;
    let toFromRegex = /^<message to="(.*)" from="([A-Za-z]*)" .*>(.*|.*\n.*)<\/message>$/gm;
    let toFromRegex2 = /^<message\s+to="(.*)"\s+from="([A-Za-z]*)">(.*|.*\n.*)<\/message>$/gm
    if (xml.match(fromToRegex)) {
        let m = fromToRegex.exec(xml);
        let from = m[1];
        let to = m[2];
        let message = m[3].split('\n');
        message = message.filter(x=>x != '');
        let newMessage= [];
        for (let i of message) {
            newMessage.push(`<p>${i}</p>`)
        }

        console.log(`<article>
  <div>From: <span class="sender">${from}</span></div>
  <div>To: <span class="recipient">${to}</span></div>
  <div>
    ${newMessage}
  </div>
</article>`);
    }
   else if (xml.match(toFromRegex) || xml.match(toFromRegex2)) {
        let m = toFromRegex.exec(xml);
        if(m === null){
            m = toFromRegex2.exec(xml);
        }
        let from = m[1];
        let to = m[2];
        let message = m[3].split('\n');
        message = message.filter(x=>x != '');
        let newMessage= [];
        for (let i of message) {
            newMessage.push(`<p>${i}</p>`)
        }
        console.log(`<article>
  <div>From: <span class="sender">${to}</span></div>
  <div>To: <span class="recipient">${from}</span></div>
  <div>
    ${newMessage.join('\n    ')}
  </div>
</article>`);
    } else {console.log('Invalid message format')}

}
solve('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');

solve(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`);

solve(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`);

solve(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);

solve(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`);

solve(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`);

solve(`<message to="UserAlpha" from="UserBeta">Message body</message>`);