function f(arr) {
    let n = Number(arr.shift());
    for (const elem of arr) {
        let result = cook(n, elem);
        n = result;
        console.log(result);
    }

    function cook(number, operation) {
        switch (operation){
            case 'chop' : return number / 2;
            case 'dice' : return Math.sqrt(number);
            case 'spice' : return number + 1;
            case 'bake' : return number * 3;
            case 'fillet' : return fillet(number);
        }

        function fillet(number) {
            let num = parseFloat(number);
            let result = num - ( num * .20);
            return result;
        }
    }

}





//f([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
f([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
