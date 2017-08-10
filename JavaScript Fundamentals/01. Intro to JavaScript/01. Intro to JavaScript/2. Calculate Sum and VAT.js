function vat(input) {
    let sum =0;
    for (let i of input)
        sum += Number(i);


    console.log("sum = " + sum);
    console.log("VAT = " + sum*0.2);
    console.log("total = " + (sum + (sum*0.2)));
}
vat(['1.20','2.60','3.50']);