function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_SkvsjN7DW';
    const kinveyUsername = 'pepi';
    const kinveyPass = 'p';
    const base64auth = btoa(kinveyUsername + ':' + kinveyPass);
    const authHeader = {
        'Authorization': 'Basic ' + base64auth,
        'Content-type': 'application/json',
    };

    $('.load').click(loadAll());
    $('.add').click(createCatch)

    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: authHeader,
            data: JSON.stringify(data)
        })
    }

    function loadAll() {
        request('GET' , '/biggestCatches')
            .then(displayAll)
            .catch(displayError);
        //console.log(loadAll)
    }
    function displayAll(data) {
        let catches = $('#catches');
        catches.empty();

        for(let el of data){
            catches.append($(`<div class="catch" data-id="${el._id}">`).append($('<label>').text('Angler'))
                .append($(`<input type="text" class="angler" value="${el['angler']}"/>`))
                .append($('<label>').text('Weight'))
                .append($(`<input type="number" class="weight" value="${el['weight']}"/>`))
                .append($('<label>').text('Species'))
                .append($(`<input type="text" class="species" value="${el['species']}"/>`))
                .append($('<label>').text('Location'))
                .append($(`<input type="text" class="location" value="${el['location']}"/>`))
                .append($('<label>').text('Bait'))
                .append($(`<input type="text" class="bait" value="${el['bait']}"/>`))
                .append($('<label>').text('Capture Time'))
                .append($(`<input type="number" class="captureTime" value="${el['captureTime']}"/>`))
                .append($('<button class="update">Update</button>').click(updateCatch))
                .append($('<button class="delete">Delete</button>').click(deleteCatch))
            )
        }
    }

    function updateCatch() {
        let catchEl = $(this).parent();
        let dataObj = createDataJson(catchEl)
       // console.log($(this).parent().attr('data-id'))
        request('PUT', `/biggestCatches/${catchEl.attr('data-id')}`, dataObj)
            .then(loadAll)
            .catch(displayError);
    }
    function deleteCatch() {
      let catchId = $(this).parent().attr('data-id')
        console.log(catchId);
        request('DELETE', `/biggestCatches/${catchId}`)
            .then(loadAll())
            .catch(displayError)
    }
    function createCatch() {
        let catchEl = $('#addForm');
        let dataObj = createDataJson(catchEl);
        //console.log(dataObj);
        request('POST', '/biggestCatches', dataObj)
            .then(loadAll)
            .catch(displayError);
    }

    function createDataJson(catchEl) {
        return{
            angler: catchEl.find('.angler').val(),
            weight: +catchEl.find('.weight').val(),
            species: catchEl.find('.species').val(),
            location: catchEl.find('.location').val(),
            bait: catchEl.find('.bait').val(),
            captureTime: +catchEl.find('.captureTime').val()
        };
        //console.log(catchEl.find('.angler').val())

    }
    function displayError(err) {
        alert(`ERROR: ${err.statusText}`);
    }
}