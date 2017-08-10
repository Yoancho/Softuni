function getInfo() {

    let stopId = $('#stopId').val();
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    let m = $.ajax({
        url: url,
        success: displayBuses,
        error: displayError
    });

    function displayBuses(allBus) {

        let busStation = allBus.name;
        let busInfo = allBus.buses;

        for (let busNumber in busInfo) {
            let busMinutes = busInfo[busNumber];
            let bussinfo = `Bus ${busNumber} arrives in ${busMinutes} minutes`;
            $('#buses').append($('<li>').text(bussinfo));
        }

        $('#stopName').append(busStation);

    }

    function displayError() {
        let newLi = $('<li>Error</li>');
        $('#stopName').append(newLi);
    }
}