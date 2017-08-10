function evenOrOdd([num]) {
    let rem = num % 2 ;
    if(rem == 0) console.log("even");
    else if(rem == Math.round(rem)) console.log("odd");
    else console.log("invalid");
}
evenOrOdd([5]);
evenOrOdd([8]);
evenOrOdd([-3]);
evenOrOdd([1.5]);
evenOrOdd([0]);