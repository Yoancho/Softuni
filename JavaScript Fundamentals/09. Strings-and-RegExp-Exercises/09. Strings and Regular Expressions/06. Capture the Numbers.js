function capture(str) {
    let r = str.toString().match(/\d+/g);
    console.log(r.join(' '));
}
capture(['The300', 'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);


