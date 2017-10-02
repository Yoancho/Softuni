function attachEvents() {
    let baseUrl = 'https://judgetests.firebaseio.com/locations.json';
    let location = $('#location');
    let symbols = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176'   // °
    };
    $('#submit').click(function () {
        $('#forecast').css('display', 'block'); // ('display','block');
        $.ajax({
            url: baseUrl,
            success: function (weather) {
                for (let item of weather) {
                    let name = item.name;
                    let code = item.code;
                    if (name === location.val()) {
                        $.ajax({
                            url: `https://judgetests.firebaseio.com/forecast/today/${code}.json `,
                            success: function (data) {
                                let town = data.name;
                                let symbol = data.forecast.condition;
                                let s = symbols[symbol];
                                let hi = data.forecast.high;
                                let low = data.forecast.low;
                                $('#current').append($('<span class="condition symbol">').html(s));
                                let span = $('<span class="condition">');
                                span.append($('<span class="forecast-data">').html(data.name));
                                span.append($('<span class="forecast-data">').html(low + symbols.Degrees + '/' + hi + symbols.Degrees));
                                span.append($('<span class="forecast-data">').html(symbol));
                                $('#current').append(span);

                                $.ajax({
                                    url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json `,
                                    success: function (threeDaysData) {

                                        for (let item of threeDaysData.forecast){
                                            let span = $('<span class="upcoming">');
                                            let symbol = symbols[item.condition];
                                            let temp;
                                            let deg = item.low + symbols.Degrees +'/'+ item.high +symbols.Degrees;
                                            span.append($('<span class="symbol">').html(symbol));
                                            span.append($('<span class="forecast-data">').html(deg));
                                            span.append($('<span class="forecast-data">').html(item.condition));

                                        }

                                    }
                                });


                            }
                        })
                    }
                }

            },
            error: function () {

            }
        })
    })
}