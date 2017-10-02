function agr(input) {
    let sum = '';
    let sum1 = '';
    let conc = input.join("");;
    for (let i = input.length-1; i >= 0 ; i--) {
        sum = Number(sum) + Number(input[i]);
        sum1 = Number(sum1) + (1/Number(input[i]));
    }
    console.log(sum);
    console.log(sum1);
    console.log(conc);
}
//agr(['1', '2', '3']);
//agr([2,4,8,16]);
agr([2, 4, 8, 16]);