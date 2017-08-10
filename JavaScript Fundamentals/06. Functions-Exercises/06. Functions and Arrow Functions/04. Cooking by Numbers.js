function cooking(num) {
    let number = Number( num.shift());
    for(let i = 0; i < num.length ; i++){
        let operation = num[i];
        if(operation == 'chop'){
            number = number /2;
            console.log(number);
        }
        else if(operation == 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }
        else if(operation == 'spice'){
            number = number +1;
            console.log(number);
        }
        else if(operation == 'bake'){
            number = number * 3;
            console.log(number);
        }
        else if(operation == 'fillet'){
            number = number * 0.8;
            console.log(number);
        }
    }
}
//cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);