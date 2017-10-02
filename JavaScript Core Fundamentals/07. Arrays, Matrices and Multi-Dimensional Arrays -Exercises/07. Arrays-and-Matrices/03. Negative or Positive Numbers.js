function sortNum(num) {
    num = num.map(Number);
    let result = [];
   for(let number of num){
       if(number < 0)
           result.unshift(number);
       else
           result.push(number);
   }
   console.log(result.join('\n'));
}
sortNum(['7', '-2', '8', '9','-88']);