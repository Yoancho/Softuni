function repeatString(str, num) {
    let newString = '';
    for (var i = 0; i < Number(num); i++) {
        newString += str;
    }
    console.log(newString);
}
repeatString('repeat','5');