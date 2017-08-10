const baseUrl = 'https://baas.kinvey.com/appdata/kid_rkKUciVIb';
// const username = 'peter';
// const pass = 'p';
// const base64auth = btoa(username + ':' + pass);
const authHeader = {
    'Authorization': 'Basic cGV0ZXI6cA==',
    'Content-type': 'application/json',
};

$('#get').click(function listAllBooks() {

    $.ajax({
        method: 'GET',
        url: baseUrl + '/books',
        headers: authHeader,
        success: displayData,
        error: displayError
    });
})

$('#post').click(function postNewBook() {
    let book = {"title": "Kak ocelqh... sys sirene", "author": "shef Manchev", "isbn": "1681"};
    $.ajax({
        method: 'POST',
        url: baseUrl + '/books',
        headers: authHeader,
        data: JSON.stringify(book),
        success: displayAlert,
        error: displayError
    });
});

$('#put').click(function change() {
    $.ajax({
        method: 'GET',
        url: baseUrl + '/books',
        headers: authHeader,
        success: function (data) {
            let bookForUpdate = data[data.length-1];
            let id = bookForUpdate._id;
            console.log(id);
            let updatedBook = {"title": "Kak ocelqh... sys kajma", "author": "shef Manchev", "isbn": "1691"};
            $.ajax({
                method: 'PUT',
                url: baseUrl + '/books'+id,
                headers: authHeader,
                data: JSON.stringify(updatedBook),
                success: displayAlert,
                error: displayError
            });
        }
    });

})

$('#delete').click(function () {

})

function displayAlert() {
    alert('Success');
}

function displayData(data) {
    for (let el of data) {
        $('#result').append($('<li>').text(el.author + el.isbn + el.title))
    }
    console.log(data);
}

function displayError(err) {
    let errorType = err.status;
    let errorText = err.statusText;
    console.log('Error:  ' + errorType + '-->' + errorText);
}