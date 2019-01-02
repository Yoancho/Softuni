function f([d, m, yyyy]) {
    let date = new Date(yyyy, m-1, 0); //ако е 0, присвоява последния ден от месеца
    console.log(date.getDate());
}

f([17, 3, 2002])
f([13, 12, 2004])