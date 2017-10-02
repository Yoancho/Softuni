function check(str, word) {
    let startPart = str.slice(0 ,word.length);
    if(startPart == word){
        console.log(true);
    }else {
        console.log(false);
    }
}
check('How have you been?', 'How');