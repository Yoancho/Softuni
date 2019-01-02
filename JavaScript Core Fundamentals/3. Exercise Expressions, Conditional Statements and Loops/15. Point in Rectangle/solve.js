function f([x, y, xMin, xMax, yMin, yMax]) {
    if (x>= xMin && x<= xMax && y >= yMin && y <= yMax){
        console.log('inside')
    } else {
        console.log('outside')
    }

}

f([8, -1, 2, 12, -3, 3]);
f([12.5, -1, 2, 12, -3, 3]);