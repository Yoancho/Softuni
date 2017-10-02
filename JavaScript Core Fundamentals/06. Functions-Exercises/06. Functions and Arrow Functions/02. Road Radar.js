function roadRadar([speed, zone]) {
    speed = Number(speed);


    function getLimit(zone) {
        switch (zone) {
            case 'motorway' :
                return 130;
            case 'interstate' :
                return 90;
            case 'city' :
                return 50;
            case 'residential' :
                return 20;
        }
    }
    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);


    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
                if(overSpeed <= 20){
                    console.log('speeding');
                }
                else if (overSpeed <= 40) {
                    console.log('excessive speeding');
                }
                else {
                    console.log('reckless driving');
                }

        }
    }

}
roadRadar(['200', 'motorway']);
roadRadar(['21', 'residential']);
roadRadar(['120', 'interstate']);