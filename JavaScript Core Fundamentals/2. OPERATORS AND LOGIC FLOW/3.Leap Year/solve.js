function f(year){
    let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    console.log(leap ? 'yes' : 'no');
}



f(1999);
f(2000);
f(1900)
