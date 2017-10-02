function loadCommits() {
    let username = $('#username').val();
    let repository = $('#repo').val();
    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    $.ajax({
        method: 'GET',
        url: url,
        success: function (data) {
            for (let commit of data) {
                let author = commit.commit.author.name;
                let commitText = commit.commit.message;
                $('#commits').append($('<li>').text(author + ' : ' + commitText))
            }
        },
        error: function (err) {
            let errorType = err.status;
            let errorText = err.statusText;
            $('#commits').append($('<li>').text(`Error: ${errorType} (${errorText})`))
        }
    })
}