function leapYear(y) {
    return ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) ? "yes" : "no";
}
console.log(leapYear('1900'));
console.log(leapYear('1999'));
console.log(leapYear('2000'));