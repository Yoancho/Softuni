function f(str) {
        let halfLenght = parseInt(str.length/ 2);

        for (var i = 0, j = str.length - 1; i < halfLenght; i++, j--) {
            if (str[i] !== str[j]){
                console.log(false);
                return;
            }
        }
        console.log(true)
}

f('haha');
f('racecar');
f('unitinu');
f('racecer');
f('ABBA');