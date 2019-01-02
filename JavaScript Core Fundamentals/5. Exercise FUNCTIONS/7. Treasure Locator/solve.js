function f(arr) {
    const Tokelau = {name: 'Tokelau', x: [8, 9], y: [0, 1]};
    const Tuvalu = {name: 'Tuvalu', x: [1, 3], y: [1, 3]};
    const Samoa = {name: 'Samoa', x: [5, 7], y: [3, 5]};
    const Tonga = {name: 'Tonga', x: [0, 2], y: [6, 8]};
    const Cook = {name: 'Cook', x: [4, 9], y: [7, 8]};

    let result = Array(5);

    for (let i = 0; i < arr.length; i += 2) {
        let x = arr[i];
        let y = arr[i + 1];

       if( !check(Tokelau, x, y) && !check(Tuvalu, x, y) && !check(Samoa, x, y) && !check(Tonga, x, y) && !check(Cook, x, y)){
           console.log('On the bottom of the ocean')
       }
    }

    function check(object, x, y) {

        let xStart = object.x[0];
        let xEnd = object.x[1];

        let yStart = object.y[0];
        let yEnd = object.y[1];

        if ((x >= xStart && x <= xEnd) && (y >= yStart && y <= yEnd)){
           console.log(object.name);
           return true
        } else { return false }
    }
}

f([4, 2, 1.5, 6.5, 1, 3]);
//f([8.7, 0.5]);