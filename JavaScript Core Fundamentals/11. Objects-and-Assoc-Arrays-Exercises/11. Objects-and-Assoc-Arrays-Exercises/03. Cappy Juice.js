function distributeJuice(arr) {
    let q = 0;
    let result = new Map();
    for (let element of arr) {
        let input = element.split('=>');
        let juice = input[0].trim();
        let quantity = Number(input[1]);
        if(result.values(q)){
            q += result[juice];
        }else {

        }
        result.set(juice, q);

    }
    let bottle = Math.ceil( juice /1000);
    console.log(bottle);
}
distributeJuice([`Orange => 2000`,
`Peach => 1432`,
`Banana => 450`,
`Peach => 600`,
`Strawberry => 549`]);