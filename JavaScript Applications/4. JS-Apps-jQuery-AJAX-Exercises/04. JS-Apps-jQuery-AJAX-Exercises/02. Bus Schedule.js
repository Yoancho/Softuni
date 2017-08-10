function solve() {
    let currentStop = 'depot';
    let nextStop = 'depot';
    let url = `https://judgetests.firebaseio.com/schedule/${currentStop}.json`;

    function depart() {
        changeButtons('#arrive', '#depart');
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                nextStop = data.next;
                $('#info span').text('Next stop ' + data.name);
            }
        });
    }

    function arrive() {
        changeButtons('#depart', '#arrive');
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                $('#info span').text('Arriving at ' + data.name);
                url = `https://judgetests.firebaseio.com/schedule/${nextStop}.json`;
            }
        });
    }

    function changeButtons(btn1, btn2) {
        $(btn1).removeAttr('disabled');
        $(btn2).attr('disabled', 'disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

// ANOTHER SOLVE
// function solve() {
//     let apiUrl = 'https://judgetests.firebaseio.com/schedule/';
//     let currentStop = 'depot';
//     let nextStop = 'depot';
//
//     function depart() {
//         toggleButtons('#arrive', '#depart');
//         $.ajax({
//             method: 'GET',
//             url: apiUrl + currentStop + '.json',
//             success: function (data) {
//                 nextStop = data.next;
//                 $('#info').find('span').text(`Next stop ${data.name}`);
//             }
//         });
//     }
//
//     function arrive() {
//         toggleButtons('#depart', '#arrive');
//         $.ajax({
//             method: 'GET',
//             url: apiUrl + currentStop + '.json',
//             success: function (data) {
//                 $('#info').find('span').text(`Arriving at ${data.name}`);
//                 currentStop = nextStop;
//             }
//         });
//     }
//
//     function toggleButtons(buttonA, buttonB) {
//         $(buttonA).removeAttr('disabled');
//         $(buttonB).attr('disabled', 'disabled');
//     }
//
//     return {
//         depart,
//         arrive
//     };
// }