function calcDay([day, month, year]) {
    var date = new Date(year, month-1, 0);
    return date.getDate();
}