function f(arr) {
    let n = Number(arr.shift());
    let levski = [];
    let litex = [];
    let vip = [];

    for (var i = 0; i < 3; i++) {
        levski[i] = [];
        litex[i] = [];
        vip[i] = [];
        for (var j = 0; j < n; j++) {
            levski[i].push(0);
            litex[i].push(0);
            vip[i].push(0);
        }
    }
    let totalMoney = 0;
    let countOfFans = 0;
    for (let row of arr) {
        let [zone, seat, sector] = row.split('*').filter(e => e !== '');
        var price = howCost(sector, zone);
        seat = Number(seat);
        switch (sector) {
            case 'A': {
                if (zone === 'LEVSKI') {
                    if (levski[0][seat - 1] === 0) {
                        levski[0][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }
                } else if (zone === 'LITEX') {
                    if (litex[0][seat - 1] === 0) {
                        litex[0][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }

                } else if (zone === 'VIP') {
                    if (vip[0][seat - 1] === 0) {
                        vip[0][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }

                }

                break
            }
            case 'B': {
                if (zone === 'LEVSKI') {
                    if (levski[1][seat - 1] === 0) {
                        levski[1][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }
                } else if (zone === 'LITEX') {
                    if (litex[1][seat - 1] === 0) {
                        litex[1][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }

                } else if (zone === 'VIP') {
                    if (vip[1][seat - 1] === 0) {
                        vip[1][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }

                }
                break
            }
            case 'C': {
                if (zone === 'LEVSKI') {
                    if (levski[2][seat - 1] === 0) {
                        levski[2][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }
                } else if (zone === 'LITEX') {
                    if (litex[2][seat - 1] === 0) {
                        litex[2][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }

                } else if (zone === 'VIP') {
                    if (vip[2][seat - 1] === 0) {
                        vip[2][seat - 1] = 1;
                        totalMoney += price;
                        countOfFans++
                    } else {
                        console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`)
                    }

                }
                break
            }
        }

    }


    console.log(totalMoney + ' lv.');
    console.log(countOfFans + ' fans');


    function howCost(sector, zone) {
        switch (sector) {
            case 'A': {
                if (zone === 'VIP') {
                    return 25;
                } else return 10;
                break;
            }
            case 'B': {
                if (zone === 'VIP') {
                    return 15;
                } else return 7;
                break;
            }
            case 'C': {
                if (zone === 'VIP') {
                    return 10;
                } else return 5;
                break;
            }
        }
    }
}

// f(["5","LITEX*5*A", "LITEX*5*B", "LITEX*5*A", "VIP*1*A"]);
// console.log();
f(["5", "LITEX*5*A", "LEVSKI*2*A", "LEVSKI*3*B", "VIP*4*C", "LITEX*3*B", "LEVSKI*2*A", "LITEX*5*B", "LITEX*5*A", "VIP*1*A"]);