function validation(str) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    if(str.match(pattern)){
        console.log('Valid');
    }else {
        console.log('Invalid');
    }
}
validation('valid@email.bg', 'invalid@emai1.bg');
