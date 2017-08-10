function checkEnd(str, word) {
    let check = str.indexOf(word);
    if(check != -1){
        console.log(true);
    }else {
        console.log(false);
    }
}
checkEnd('This is Houston, we have…','We have…');