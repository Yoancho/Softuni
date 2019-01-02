function f([speed, area]) {
    let limit = getLimit(area);
  if(speed > limit){
      let overSpeed = speed - limit;
      console.log(getCategory(overSpeed));
  }

    function getCategory(overSpeed) {
        if(overSpeed <= 20){
            return 'speeding';
        } else if(overSpeed > 20 && overSpeed <= 40 ){
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    function getLimit(zone) {
        switch (zone) {
            case 'motorway' : return 130;
            case 'interstate' : return 90;
            case 'city' : return 50;
            case 'residential' : return 20;
        }
    }
}




f([40, 'city']);
f([21, 'residential']);
f([120, 'interstate']);
f([200, 'motorway']);
