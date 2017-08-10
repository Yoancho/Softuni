class MailBox {
    constructor() {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        let msg =  ` * [${subject}] ${text}`;
        this.mailBox.push(msg).trim;
    }

    get messageCount() {
        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox = [];
    }

    findBySubject(substr) {
        let result = [];
        for (let message of this.mailBox) {
            let index = message.indexOf(substr);
            if (index !== -1) {
                let s = message.match(/\w+/);
                let t = message.match(/\w+/g);
                t = t.slice(1, t.length-1);
                result.push(
                    {
                    subject: s.toString(),
                    text : t.toString()
                    });
            }
        }

        return result;
    }

    toString() {
        if (this.mailBox.length == 0) {
            return ' * (empty mailbox)';
        } else {
            return this.mailBox.join('\n');
        }
    }
}


let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('beer')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

// console.log("New mailbox:\n" +
//     new MailBox()
//         .addMessage("Subj 1", "Msg 1")
//         .addMessage("Subj 2", "Msg 2")
//         .addMessage("Subj 3", "Msg 3")
//         .toString());
