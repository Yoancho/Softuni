function palindrome(input) {
    let result = '';
    for(let i = 0; i < (input.length-1)/2; i++){
        if (input[i] != input[(input.length-1)-i]) {
            result = false;
        }
        else {
            result = true;
        }
    }
    console.log(result);
}
palindrome('haha');
palindrome('racecar');