function attachEvents() {
    $('#refresh').click(attachRefresh);
    $('#submit').click(attachSend);

    function attachSend() {
        let messageJson = {
            "author": $('#author').val(),
            "content": $('#content').val(),
            "timestamp": Date.now()
        };

        let sendMessageRequest = { url: `https://phonebook-7cb4b.firebaseio.com/messenger.json`,
            method: 'POST',
            data: JSON.stringify(messageJson),
            success: attachRefresh
        };
        $.ajax(sendMessageRequest);
    }

    function attachRefresh() {
        $('#author').val('');
        $('#content').val('');
        $.get(`https://phonebook-7cb4b.firebaseio.com/messenger.json`).then(displayMessages);
    }

    function displayMessages(messages) {
        let output = $('#messages');
        output.empty();
        let messagesStr = '';
        for (let key in messages){
            messagesStr += `${messages[key]['author']}: ${messages[key]["content"]}\n`;
            output.text(messagesStr);
        }

    }
}